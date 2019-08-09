import { MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal, MediaItemSortFieldInternal } from 'app/data/models/internal/entities/media-items/media-item';

/**
 * Model for a TV Show, internal type just for display purposes
 */
export type TvShowInternal = MediaItemInternal & {

	id: string;
	creators?: string[];
	averageEpisodeRuntimeMinutes?: number;
	episodesNumber?: number;
	seasonsNumber?: number;
	inProduction?: boolean;
	nextEpisodeAirDate?: string;
}

/**
 * TV Show filtering options, internal type just for display purposes
 */
export type TvShowFilterInternal = MediaItemFilterInternal & {

}

/**
 * Values for TV show ordering options, internal type just for display purposes
 */
export type TvShowSortFieldInternal = MediaItemSortFieldInternal | 'CREATOR';

/**
 * TV Show sort by options, internal type just for display purposes
 */
export type TvShowSortByInternal = MediaItemSortByInternal & {

	field: TvShowSortFieldInternal;
}
