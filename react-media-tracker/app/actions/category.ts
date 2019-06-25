import { CategoryInternal } from 'app/models/internal/category';
import { Action } from 'redux';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const INVALIDATE_CATEGORIES = 'INVALIDATE_CATEGORIES';

export const LOAD_NEW_CATEGORY = 'LOAD_NEW_CATEGORY';
export const LOAD_CATEGORY = 'LOAD_CATEGORY';

export const SAVE_CATEGORY = 'SAVE_CATEGORY';
export const START_SAVING_CATEGORY = 'START_SAVING_CATEGORY';
export const COMPLETE_SAVING_CATEGORY = 'COMPLETE_SAVING_CATEGORY';

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
 * The invalidate categories action
 */
export type InvalidateCategoriesAction = Action & {
	
};

/**
 * The load new category action
 */
export type LoadNewCategoryAction = Action & {
	
};

/**
 * The load existing category action
 */
export type LoadCategoryAction = Action & {
	
	category: CategoryInternal;
};

/**
 * The save category action
 */
export type SaveCategoryAction = Action & {
	
	category: CategoryInternal;
};

/**
 * The start saving category action
 */
export type StartSavingCategoryAction = Action & {
	
	category: CategoryInternal;
};

/**
 * The complete saving category action
 */
export type CompleteSavingCategoryAction = Action & {
	
};

/**
 * Generator for the fetch categories list action, which causes the request categories action, the async categories fetch and then the receive categories action
 * @returns the action
 */
export const fetchCategories = (): FetchCategoriesAction => {
	
	return {
		type: FETCH_CATEGORIES
	};
};

/**
 * Generator for the request categories action, which marks the start of the categories list fetching operation
 * @returns the action
 */
export const requestCategories = (): RequestCategoriesAction => {
	
	return {
		type: REQUEST_CATEGORIES
	};
};

/**
 * Generator for the receive categories action, which marks the end of the categories list fetching operation
 * @param categories the fetched categories, possibly an empty array
 * @returns the action
 */
export const receiveCategories = (categories: CategoryInternal[]): ReceiveCategoriesAction => {
	
	return {
		type: RECEIVE_CATEGORIES,
		categories: categories
	};
};

/**
 * Generator for the invalidate categories action, which marks the categories list as invalid, i.e. they require a reload
 * @returns the action
 */
export const invalidateCategories = (): InvalidateCategoriesAction => {

	return {
		type: INVALIDATE_CATEGORIES
	};
};

/**
 * Generator for the load new category action, which resets the category details state to the initial values
 * @returns the action
 */
export const loadNewCategory = (): LoadNewCategoryAction => {
	
	return {
		type: LOAD_NEW_CATEGORY
	};
};

/**
 * Generator for the load existing category action, which sets the category details state
 * @param category the category data
 * @returns the action
 */
export const loadCategory = (category: CategoryInternal): LoadCategoryAction => {
	
	return {
		type: LOAD_CATEGORY,
		category: category
	};
};

/**
 * Generator for the save category action, which causes the start saving category action, the async category store and then the complete saving category action
 * @param category the category data
 * @returns the action
 */
export const saveCategory = (category: CategoryInternal): SaveCategoryAction => {
	
	return {
		type: SAVE_CATEGORY,
		category: category
	};
};

/**
 * Generator for the start saving category action, which marks the start of the category saving operation
 * @param category the category data
 * @returns the action
 */
export const startSavingCategory = (category: CategoryInternal): StartSavingCategoryAction => {
	
	return {
		type: START_SAVING_CATEGORY,
		category: category
	};
};

/**
 * Generator for the complete saving category action, which marks the end of the category saving operation
 * @returns the action
 */
export const completeSavingCategory = (): CompleteSavingCategoryAction => {
	
	return {
		type: COMPLETE_SAVING_CATEGORY
	};
};
