import { MediaItemCatalogController, MediaItemController, MediaItemDefinitionsController } from 'app/data/controllers/core/entities/media-items/media-item';
import { TvShowMockedCatalogController, TvShowMockedController } from 'app/data/controllers/impl-mocks/entities/media-items/tv-show';
import { TvShowDefinitionsControllerImpl } from 'app/data/controllers/impl-prod/entities/media-items/tv-show';
import { CatalogTvShowInternal, SearchTvShowCatalogResultInternal, TvShowFilterInternal, TvShowInternal, TvShowSortByInternal } from 'app/data/models/internal/media-items/tv-show';

/**
 * The data controller for TV shows
 * @see MediaItemController
 */
export type TvShowController = MediaItemController<TvShowInternal, TvShowSortByInternal, TvShowFilterInternal>;

/**
 * The catalog controller for TV shows
 * @see MediaItemCatalogController
 */
export type TvShowCatalogController = MediaItemCatalogController<SearchTvShowCatalogResultInternal, CatalogTvShowInternal>;

/**
 * The definitions controller for TV shows
 * @see MediaItemDefinitionsController
 */
export type TvShowDefinitionsController = MediaItemDefinitionsController<TvShowInternal, TvShowSortByInternal, TvShowFilterInternal>;

/**
 * Singleton implementation of the TV shows controller
 */
export const tvShowController: TvShowController = new TvShowMockedController();

/**
 * Singleton implementation of the TV shows catalog controller
 */
export const tvShowCatalogController: TvShowCatalogController = new TvShowMockedCatalogController();

/**
 * Singleton implementation of the TV shows definitions controller
 */
export const tvShowDefinitionsController: TvShowDefinitionsController = new TvShowDefinitionsControllerImpl();
