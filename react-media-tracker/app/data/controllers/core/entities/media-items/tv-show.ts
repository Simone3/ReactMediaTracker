import { TvShowMockedCatalogController, TvShowMockedController } from 'app/data/controllers/impl-mocks/entities/media-items/tv-show';
import { CatalogTvShowInternal, SearchTvShowCatalogResultInternal, TvShowFilterInternal, TvShowInternal, TvShowSortByInternal } from 'app/data/models/internal/media-items/tv-show';
import { MediaItemCatalogController, MediaItemController } from './media-item';

/**
 * The data controller for TV shows
 */
export type TvShowController = MediaItemController<TvShowInternal, TvShowSortByInternal, TvShowFilterInternal>;

/**
 * The catalog controller for TV shows
 */
export type TvShowCatalogController = MediaItemCatalogController<SearchTvShowCatalogResultInternal, CatalogTvShowInternal>;

/**
 * Singleton implementation of the TV shows controller
 */
export const tvShowController: TvShowController = new TvShowMockedController();

/**
 * Singleton implementation of the TV shows catalog controller
 */
export const tvShowCatalogController: TvShowCatalogController = new TvShowMockedCatalogController();
