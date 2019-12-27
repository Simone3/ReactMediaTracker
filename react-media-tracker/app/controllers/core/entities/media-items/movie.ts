import { MediaItemCatalogController, MediaItemController, MediaItemDefinitionsController } from 'app/controllers/core/entities/media-items/media-item';
import { MovieMockedCatalogController, MovieMockedController } from 'app/controllers/impl-mocks/entities/media-items/movie';
import { MovieDefinitionsControllerImpl } from 'app/controllers/impl-prod/entities/media-items/movie';
import { CatalogMovieInternal, MovieFilterInternal, MovieInternal, MovieSortByInternal, SearchMovieCatalogResultInternal } from 'app/data/models/internal/media-items/movie';

/**
 * The data controller for movies
 * @see MediaItemController
 */
export type MovieController = MediaItemController<MovieInternal, MovieSortByInternal, MovieFilterInternal>;

/**
 * The catalog controller for movies
 * @see MediaItemCatalogController
 */
export type MovieCatalogController = MediaItemCatalogController<SearchMovieCatalogResultInternal, CatalogMovieInternal>;

/**
 * The definitions controller for movies
 * @see MediaItemDefinitionsController
 */
export type MovieDefinitionsController = MediaItemDefinitionsController<MovieInternal, MovieSortByInternal, MovieFilterInternal>;

/**
 * Singleton implementation of the movie controller
 */
export const movieController: MovieController = new MovieMockedController();

/**
 * Singleton implementation of the movie catalog controller
 */
export const movieCatalogController: MovieCatalogController = new MovieMockedCatalogController();

/**
 * Singleton implementation of the movie definitions controller
 */
export const movieDefinitionsController: MovieDefinitionsController = new MovieDefinitionsControllerImpl();
