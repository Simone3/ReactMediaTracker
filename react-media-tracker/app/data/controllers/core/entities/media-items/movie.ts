import { MovieMockedController } from 'app/data/controllers/impl-mocks/entities/media-items/movie';
import { MovieFilterInternal, MovieInternal, MovieSortByInternal } from 'app/data/models/internal/entities/media-items/movie';
import { MediaItemController } from './media-item';

/**
 * The data controller for movies
 */
export type MovieController = MediaItemController<MovieInternal, MovieSortByInternal, MovieFilterInternal>;

// /**
//  * The catalog controller for movies
//  */
// export interface MovieCatalogController extends MediaItemCatalogController<SearchMovieCatalogResultInternal, CatalogMovieInternal> {

// }

/**
 * Singleton implementation of the movie controller
 */
export const movieController: MovieController = new MovieMockedController();

