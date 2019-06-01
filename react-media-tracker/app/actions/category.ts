import { CategoryInternal } from 'app/models/internal/category';
import { Action } from 'redux';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

/**
 * The fetch categories action
 */
export type FetchCategoriesAction = Action & {
	
};

/**
 * The request categories action
 */
export type RequestCategoriesAction = Action & {
	
};

/**
 * The receive categories action
 */
export type ReceiveCategoriesAction = Action & {
	
	categories: CategoryInternal[];
};

/**
 * Generator for the fetch categories action, which takes care of dispatching the request categories action, retrieves the categories and then dispatches
 * the receive categories action
 * @returns the action
 */
export const fetchCategories = (): FetchCategoriesAction => {
	
	return {
		type: FETCH_CATEGORIES
	};
};

/**
 * Generator for the request categories action, which starts a categories fetch
 * @returns the action
 */
export const requestCategories = (): RequestCategoriesAction => {
	
	return {
		type: REQUEST_CATEGORIES
	};
};

/**
 * Generator for the receive categories action, which ends a categories fetch with the actual categories
 * @param categories the fetched categories, possibly an empty array
 * @returns the action
 */
export const receiveCategories = (categories: CategoryInternal[]): ReceiveCategoriesAction => {
	
	return {
		type: RECEIVE_CATEGORIES,
		categories: categories
	};
};
