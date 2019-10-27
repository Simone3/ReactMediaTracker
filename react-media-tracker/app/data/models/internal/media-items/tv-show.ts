import { CatalogMediaItemInternal, MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal, MediaItemSortFieldInternal, SearchMediaItemCatalogResultInternal } from 'app/data/models/internal/media-items/media-item';
import { OptionalToUndefined } from 'app/utilities/helper-types';

/**
 * Util type to extract common fields to both TV show entities and catalog entries
 */
type CoreTvShowDataInternal = {

	creators?: string[];
	averageEpisodeRuntimeMinutes?: number;
	episodesNumber?: number;
	seasonsNumber?: number;
	inProduction?: boolean;
	nextEpisodeAirDate?: Date;
};

/**
 * Model for a TV Show, internal type just for display purposes
 */
export type TvShowInternal = MediaItemInternal & CoreTvShowDataInternal & {

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

/**
 * Model for a media item with base properties, internal type just for display purposes
 */
export type CatalogTvShowInternal = CatalogMediaItemInternal & CoreTvShowDataInternal & {
	
};

/**
 * Media item catalog search result, internal type just for display purposes
 */
export type SearchTvShowCatalogResultInternal = SearchMediaItemCatalogResultInternal & {

};

/**
 * The default initial TV show, internal type just for display purposes
 */
export const DEFAULT_TV_SHOW: TvShowInternal = {
	id: '',
	name: '',
	mediaType: 'TV_SHOW',
	status: 'NEW',
	importance: 'VERY_IMPORTANT'
};

/**
 * The default TV show catalog details (with all fields set), internal type just for display purposes
 */
export const DEFAULT_CATALOG_TV_SHOW: OptionalToUndefined<CatalogTvShowInternal> = {
	catalogId: undefined,
	name: '',
	description: undefined,
	genres: undefined,
	imageUrl: undefined,
	releaseDate: undefined,
	averageEpisodeRuntimeMinutes: undefined,
	creators: undefined,
	episodesNumber: undefined,
	inProduction: undefined,
	nextEpisodeAirDate: undefined,
	seasonsNumber: undefined
};

