import { CatalogMediaItemInternal, MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal, MediaItemSortFieldInternal, SearchMediaItemCatalogResultInternal } from 'app/data/models/internal/media-items/media-item';

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
 * The default TV show catalog details (with all fields required), internal type just for display purposes
 */
export const DEFAULT_CATALOG_TV_SHOW: Required<CatalogTvShowInternal> = {
	catalogId: '',
	name: '',
	description: '',
	genres: [],
	imageUrl: '',
	releaseDate: new Date(),
	averageEpisodeRuntimeMinutes: 0,
	creators: [],
	episodesNumber: 0,
	inProduction: false,
	nextEpisodeAirDate: new Date(),
	seasonsNumber: 0
};

