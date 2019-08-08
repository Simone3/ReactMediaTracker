import { CategoryInternal } from 'app/models/internal/entities/category';

/**
 * Portion of the internal state with the categories list information
 */
export type CategoriesListState = {

	/**
	 * The list of available categories
	 */
	readonly categories: CategoryInternal[];

	/**
	 * Flag to tell if the app is currently waiting for the categories list
	 */
	readonly isFetching: boolean;

	/**
	 * Flag to tell if the app is currently waiting for a category to be deleted
	 */
	readonly isDeleting: boolean;

	/**
	 * Flag to tell if the categories list was marked as invalid, i.e. it requires a reload
	 */
	readonly requiresReload: boolean;

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
	 * If the currently loaded category is valid, e.g. can be saved to the database
	 */
	readonly valid: boolean;

	/**
	 * The current status of the category saving process
	 */
	readonly saveStatus: CategorySaveStatus;
}

/**
 * The current status of the category saving process
 */
export type CategorySaveStatus = 'IDLE' | 'REQUESTED' | 'SAVING' | 'SAVED';
