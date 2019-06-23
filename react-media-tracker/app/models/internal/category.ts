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
 * Portion of the global state with the categories list information
 */
export type CategoriesListState = {

	/**
	 * The list of available categories
	 */
	readonly items: CategoryInternal[];

	/**
	 * Flag to tell if the app is currently waiting for the categories list
	 */
	readonly isFetching: boolean;
}

export type CategoryDetailsState = {

	/**
	 * The category data
	 */
	readonly category: CategoryInternal;

	/**
	 * Flag to tell if the app is currently saving the category details
	 */
	readonly isSaving: boolean;

	/**
	 * Flag to tell if the app has completed saving the category details
	 */
	readonly saveCompleted: boolean;
}
