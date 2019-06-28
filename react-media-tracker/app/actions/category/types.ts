import { CategoryInternal } from 'app/models/internal/category';
import { Action } from 'redux';

/**
 * The fetch categories action
 */
export type FetchCategoriesAction = Action & {
	
};

/**
 * The start fetching categories action
 */
export type StartFetchingCategoriesAction = Action & {
	
};

/**
 * The complete fetching categories action
 */
export type CompleteFetchingCategoriesAction = Action & {
	
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
 * The delete category action
 */
export type DeleteCategoryAction = Action & {
	
	category: CategoryInternal;
};

/**
 * The start deleting category action
 */
export type StartDeletingCategoryAction = Action & {
	
	category: CategoryInternal;
};

/**
 * The complete deleting category action
 */
export type CompleteDeletingCategoryAction = Action & {
	
};
