import { CatalogMediaItemInternal, MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal, MediaItemSortFieldInternal, SearchMediaItemCatalogResultInternal } from 'app/data/models/internal/media-items/media-item';

/**
 * Util type to extract common fields to both movie entities and catalog entries
 */
type CoreMovieDataInternal = {

	directors?: string[];
	durationMinutes?: number;
};

/**
 * A movie, internal type just for display purposes
 */
export type MovieInternal = MediaItemInternal & CoreMovieDataInternal & {

}

/**
 * A filter for movies, internal type just for display purposes
 */
export type MovieFilterInternal = MediaItemFilterInternal & {

}

/**
 * Sort fields for movies, internal type just for display purposes
 */
export type MovieSortFieldInternal = MediaItemSortFieldInternal | 'DIRECTOR';

/**
 * A sort by filter for movies, internal type just for display purposes
 */
export type MovieSortByInternal = MediaItemSortByInternal & {

	field: MovieSortFieldInternal;
}

/**
 * Model for a media item with base properties, internal type just for display purposes
 */
export type CatalogMovieInternal = CatalogMediaItemInternal & CoreMovieDataInternal & {

};

/**
 * Media item catalog search result, internal type just for display purposes
 */
export type SearchMovieCatalogResultInternal = SearchMediaItemCatalogResultInternal & {

};

/**
 * The default initial videogame, internal type just for display purposes
 */
export const DEFAULT_MOVIE: MovieInternal = {
	id: '',
	name: '',
	mediaType: 'MOVIE',
	status: 'NEW',
	importance: 'VERY_IMPORTANT'
};

/**
 * The default movie catalog details (with all fields required), internal type just for display purposes
 */
export const DEFAULT_CATALOG_MOVIE: Required<CatalogMovieInternal> = {
	name: '',
	description: '',
	directors: [],
	durationMinutes: 0,
	genres: [],
	imageUrl: '',
	releaseDate: new Date()
};
