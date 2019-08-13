import { CategoryInternal } from 'app/data/models/internal/category';

/**
 * Portion of the internal state with the categories list information
 */
export type CategoriesListState = {

	/**
	 * The list of available categories
	 */
	readonly categories: CategoryInternal[];

	/**
	 * The current status of the categories list
	 */
	readonly status: CategoriesListStatus;

	/**
	 * The currently highlighted (e.g. context menu is open) category, or undefined if none is highlighted
	 */
	readonly highlightedCategory: CategoryInternal | undefined;
}

/**
 * Portion of the internal state with the category details information
 */
export type CategoryDetailsState = {

	/**
	 * The category data
	 */
	readonly category?: CategoryInternal;

	/**
	 * If the currently loaded category is valid (no validation error occurred)
	 */
	readonly valid: boolean;

	/**
	 * If the currently loaded category is dirty (one or more fields are different from initial values)
	 */
	readonly dirty: boolean;

	/**
	 * The current status of the category saving process
	 */
	readonly saveStatus: CategorySaveStatus;
}

/**
 * The current status of the categories list
 */
export type CategoriesListStatus = 'IDLE' | 'FETCHING' | 'REQUIRES_RELOAD' | 'DELETING';

/**
 * The current status of the category saving process
 */
export type CategorySaveStatus = 'IDLE' | 'REQUESTED' | 'SAVING' | 'SAVED';
