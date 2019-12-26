import { config } from 'app/config/config';
import { RestJsonInvoker } from 'app/data/controllers/core/common/rest-json-invoker';
import { AppError } from 'app/data/models/internal/error';
import { InvocationParams } from 'app/utilities/helper-types';
import { parserValidator } from 'app/utilities/parser-validator';
import axios, { AxiosError, AxiosRequestConfig, Cancel } from 'axios';

/**
 * Implementation of the RestJsonInvoker that uses Axios to invoke services via HTTP
 * @see RestJsonInvoker
 */
export class RestJsonInvokerAxios implements RestJsonInvoker {

	private readonly TIMEOUT_CANCEL_MESSAGE = 'custom-timeout';

	/**
	 * @override
	 */
	public invoke<TRequest extends object, TResponse extends object>(parameters: InvocationParams<TRequest, TResponse>): Promise<TResponse> {

		return new Promise((resolve, reject): void => {

			// Build request options
			const cancelTokenSource = axios.CancelToken.source();
			const options: AxiosRequestConfig = {
				url: parameters.url,
				method: parameters.method,
				params: parameters.queryParams,
				data: parameters.requestBody ? JSON.stringify(parameters.requestBody) : parameters.requestBody,
				cancelToken: cancelTokenSource.token,
				headers: {
					...parameters.headers,
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'Accept-Charset': 'utf-8'
				}
			};

			// Custom timeout handling (timeout field in options only handles connection timeout)
			const timeout = parameters.timeoutMilliseconds ? parameters.timeoutMilliseconds : config.backEnd.defaultTimeoutMilliseconds;
			setTimeout(() => {
				cancelTokenSource.cancel(this.TIMEOUT_CANCEL_MESSAGE);
			}, timeout);

			// Execute request via promises
			axios.request(options)
				.then((axiosResponse) => {
	
					const rawResponseBody = axiosResponse.data;

					// Parse the raw response
					parserValidator.parseAndValidate(parameters.responseBodyClass, rawResponseBody)
						.then((parsedResponse) => {
	
							resolve(parsedResponse);
						})
						.catch((error) => {
	
							console.info('External API response parse error: %s', error);
							reject(AppError.BACKEND_PARSE.withDetails(error));
						});
				})
				.catch((error) => {

					console.info('External API invocation error: %s', error);
					
					if(this.isTimeout(error)) {

						reject(AppError.BACKEND_TIMEOUT.withDetails(error));
					}
					else {
						
						reject(AppError.BACKEND_GENERIC_ERROR.withDetails(error));
					}
				});
		});
	}

	/**
	 * Helper to determine if the back-end invocation timed out
	 * @param error the generic error
	 * @returns true if it's a timeout error
	 */
	private isTimeout(error: unknown): boolean {

		if(this.isAxiosError(error)) {

			const axiosError = error as AxiosError;
			return (axiosError.response && axiosError.response.status === 408) || axiosError.code === 'ECONNABORTED';
		}
		
		return this.isCancelError(error);
	}

	/**
	 * Helper to check if a generic error is an AxiosError
	 * @param error the generic error
	 * @returns true if it's an AxiosError
	 */
	private isAxiosError(error: unknown): boolean {

		if(error) {

			const possiblyAxiosError = error as AxiosError;
			return possiblyAxiosError.isAxiosError;
		}

		return false;
	}

	/**
	 * Helper to check if a generic error is the timeout cancel error
	 * @param error the generic error
	 * @returns true if it's the timeout cancel error
	 */
	private isCancelError(error: unknown): boolean {

		if(error) {

			const possiblyCancel = error as Cancel;
			return possiblyCancel.message === this.TIMEOUT_CANCEL_MESSAGE;
		}

		return false;
	}
}
