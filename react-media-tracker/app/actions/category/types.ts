import { CategoryInternal } from 'app/models/internal/category';
import { Action } from 'redux';

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
