import { ValuesOf } from 'app/utilities/helper-types';

/**
 * Array of all media types, internal type just for display properties
 */
export const MEDIA_TYPES_INTERNAL: [ 'BOOK', 'MOVIE', 'TV_SHOW', 'VIDEOGAME' ] = [ 'BOOK', 'MOVIE', 'TV_SHOW', 'VIDEOGAME' ];

/**
 * A category media type, internal type just for display properties
 */
export type MediaTypeInternal = ValuesOf<typeof MEDIA_TYPES_INTERNAL>;

/**
 * The internal representation of a media item category, internal type just for display properties
 */
export type CategoryInternal = {

	id: string;
	name: string;
	mediaType: MediaTypeInternal;
	color: string;
}

/**
 * The default initial category
 */
export const DEFAULT_CATEGORY: CategoryInternal = {
	id: '',
	name: '',
	color: '',
	mediaType: 'BOOK'
};

/**
 * Portion of the state with the categories list information
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
 * Portion of the state with the category details information
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
