import { ValuesOf } from 'app/utilities/helper-types';

/**
 * Array of all media types, internal type just for display purposes
 */
export const MEDIA_TYPES_INTERNAL: [ 'BOOK', 'MOVIE', 'TV_SHOW', 'VIDEOGAME' ] = [ 'BOOK', 'MOVIE', 'TV_SHOW', 'VIDEOGAME' ];

/**
 * A category media type, internal type just for display purposes
 */
export type MediaTypeInternal = ValuesOf<typeof MEDIA_TYPES_INTERNAL>;

/**
 * A media item category, internal type just for display purposes
 */
export type CategoryInternal = {

	id: string;
	name: string;
	mediaType: MediaTypeInternal;
	color: string;
}

/**
 * The default initial category, internal type just for display purposes
 */
export const DEFAULT_CATEGORY: CategoryInternal = {
	id: '',
	name: '',
	color: '',
	mediaType: 'BOOK'
};

