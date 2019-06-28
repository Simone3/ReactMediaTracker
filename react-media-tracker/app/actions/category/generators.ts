import { CategoryInternal } from 'app/models/internal/category';
import { COMPLETE_SAVING_CATEGORY, FETCH_CATEGORIES, INVALIDATE_CATEGORIES, LOAD_CATEGORY_DETAILS, LOAD_NEW_CATEGORY_DETAILS, RECEIVE_CATEGORIES, REQUEST_CATEGORIES, SAVE_CATEGORY, START_SAVING_CATEGORY } from './const';
import { CompleteSavingCategoryAction, FetchCategoriesAction, InvalidateCategoriesAction, LoadCategoryAction as LoadCategoryDetailsAction, LoadNewCategoryAction as LoadNewCategoryDetailsAction, ReceiveCategoriesAction, RequestCategoriesAction, SaveCategoryAction, StartSavingCategoryAction } from './types';

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
export const loadNewCategoryDetails = (): LoadNewCategoryDetailsAction => {
	
	return {
		type: LOAD_NEW_CATEGORY_DETAILS
	};
};

/**
 * Generator for the load existing category action, which sets the category details state
 * @param category the category data
 * @returns the action
 */
export const loadCategoryDetails = (category: CategoryInternal): LoadCategoryDetailsAction => {
	
	return {
		type: LOAD_CATEGORY_DETAILS,
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
