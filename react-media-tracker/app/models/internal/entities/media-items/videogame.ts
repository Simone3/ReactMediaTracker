import { MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal, MediaItemSortFieldInternal } from 'app/models/internal/entities/media-items/media-item';

/**
 * Model for a videogame, internal type just for display purposes
 */
export type VideogameInternal = MediaItemInternal & {

	id: string;
	developers?: string[];
	publishers?: string[];
	platforms?: string[];
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
