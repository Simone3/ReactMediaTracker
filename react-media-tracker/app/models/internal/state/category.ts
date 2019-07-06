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
	 * Flag to tell if the app is currently saving the category details
	 */
	readonly isSaving: boolean;

	/**
	 * Flag to tell if the app has completed saving the category details
	 */
	readonly saveCompleted: boolean;
}
