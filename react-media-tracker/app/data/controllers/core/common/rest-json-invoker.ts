import { RestJsonInvokerAxios } from 'app/data/controllers/impl-prod/common/rest-json-invoker';
import { Method } from 'axios';
import { ClassType } from 'class-transformer-validator';

/**
 * Helper controller to invoke external JSON-based REST services
 */
export interface RestJsonInvoker {

	/**
	 * Invokes a JSON-based service
	 * @param parameters the method parameters container
	 * @returns the 200 service response, as a promise
	 * @template TRequest the request class
	 * @template TResponse the response class
	 */
	invoke<TRequest extends object, TResponse extends object>(parameters: InvocationParams<TRequest, TResponse>): Promise<TResponse>;
}

/**
 * Internal helper type for invocation parameters
 */
export type InvocationParams<TRequest, TResponse> = {
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

/**
 * Singleton implementation of the JSON REST invoker
 */
export const restJsonInvoker = new RestJsonInvokerAxios();
