import { parserValidator } from 'app/utilities/parser-validator';
import axios, { AxiosRequestConfig, Method } from 'axios';
import { ClassType } from 'class-transformer-validator';

/**
 * Helper controller to invoke external JSON-based REST services
 */
export class RestJsonInvoker {

	/**
	 * Invokes a JSON-based service
	 * @param parameters the method parameters container
	 * @returns the 200 service response, as a promise
	 * @template TRequest the request class
	 * @template TResponse the response class
	 */
	public invoke<TRequest extends object, TResponse extends object>(parameters: InvocationParams<TRequest, TResponse>): Promise<TResponse> {

		return new Promise((resolve, reject): void => {

			const options: AxiosRequestConfig = {
				url: parameters.url,
				method: parameters.method,
				params: parameters.queryParams,
				data: parameters.requestBody ? JSON.stringify(parameters.requestBody) : parameters.requestBody,
				timeout: parameters.timeoutMilliseconds,
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					'Accept-Charset': 'utf-8'
				}
			};

			axios.request(options)
				.then((axiosResponse) => {
	
					const rawResponseBody = axiosResponse.data;

					parserValidator.parseAndValidate(parameters.responseBodyClass, rawResponseBody)
						.then((parsedResponse) => {
	
							resolve(parsedResponse);
						})
						.catch((error) => {
	
							console.error('External API response parse error: %s', error);
							reject(error);
						});
				})
				.catch((error) => {

					console.error('External API invocation error: %s', error);
					reject(error);
				});
		});
	}
}

/**
 * Singleton implementation of the JSON REST invoker
 */
export const restJsonInvoker = new RestJsonInvoker();

/**
 * Internal helper type for invocation parameters
 */
type InvocationParams<TRequest, TResponse> = {
	url: string;
	method: Method;
	requestBody?: TRequest;
	responseBodyClass: ClassType<TResponse>;
	timeoutMilliseconds?: number;
	queryParams?: QueryParams;
}

/**
 * Helper type for URL query params
 */
export type QueryParams = {
	[key: string]: string;
};

