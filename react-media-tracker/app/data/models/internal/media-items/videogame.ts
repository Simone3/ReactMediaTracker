import { CatalogMediaItemInternal, MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal, MediaItemSortFieldInternal, SearchMediaItemCatalogResultInternal } from 'app/data/models/internal/media-items/media-item';

/**
 * Util type to extract common fields to both videogame entities and catalog entries
 */
type CoreVideogameDataInternal = {

	developers?: string[];
	publishers?: string[];
	platforms?: string[];
};

/**
 * Model for a videogame, internal type just for display purposes
 */
export type VideogameInternal = MediaItemInternal & CoreVideogameDataInternal & {
	
	averageLengthHours?: number;
}

/**
 * Videogame filtering options, internal type just for display purposes
 */
export type VideogameFilterInternal = MediaItemFilterInternal & {

}

/**
 * Values for videogame ordering options, internal type just for display purposes
 */
export type VideogameSortFieldInternal = MediaItemSortFieldInternal | 'DEVELOPER';

/**
 * Videogames sort by options, internal type just for display purposes
 */
export type VideogameSortByInternal = MediaItemSortByInternal & {

	field: VideogameSortFieldInternal;
}

/**
 * Model for a media item with base properties, internal type just for display purposes
 */
export type CatalogVideogameInternal = CatalogMediaItemInternal & CoreVideogameDataInternal & {

};

/**
 * Media item catalog search result, internal type just for display purposes
 */
export type SearchVideogameCatalogResultInternal = SearchMediaItemCatalogResultInternal & {

};

/**
 * The default initial videogame, internal type just for display purposes
 */
export const DEFAULT_VIDEOGAME: VideogameInternal = {
	id: '',
	name: '',
	mediaType: 'VIDEOGAME',
	status: 'ACTIVE',
	importance: 'VERY_IMPORTANT'
};

