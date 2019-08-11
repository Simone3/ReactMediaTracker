import { MovieMockedCatalogController, MovieMockedController } from 'app/data/controllers/impl-mocks/entities/media-items/movie';
import { CatalogMovieInternal, MovieFilterInternal, MovieInternal, MovieSortByInternal, SearchMovieCatalogResultInternal } from 'app/data/models/internal/media-items/movie';
import { MediaItemCatalogController, MediaItemController } from './media-item';

/**
 * The data controller for movies
 */
export type MovieController = MediaItemController<MovieInternal, MovieSortByInternal, MovieFilterInternal>;

/**
 * The catalog controller for movies
 */
export type MovieCatalogController = MediaItemCatalogController<SearchMovieCatalogResultInternal, CatalogMovieInternal>;

/**
 * Singleton implementation of the movie controller
 */
export const movieController: MovieController = new MovieMockedController();

/**
 * Singleton implementation of the movie catalog controller
 */
export const movieCatalogController: MovieCatalogController = new MovieMockedCatalogController();
