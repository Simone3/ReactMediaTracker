/**
 * A category media type, internal type just for display properties
 */
export type MediaTypeInternal = 'BOOK' | 'MOVIE' | 'TV_SHOW' | 'VIDEOGAME';

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
