import { MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal, MediaItemSortFieldInternal } from 'app/data/models/internal/entities/media-items/media-item';

/**
 * A movie, internal type just for display purposes
 */
export type MovieInternal = MediaItemInternal & {

	id: string;
	directors?: string[];
	durationMinutes?: number;
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
