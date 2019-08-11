import { VideogameMockedCatalogController, VideogameMockedController } from 'app/data/controllers/impl-mocks/entities/media-items/videogame';
import { CatalogVideogameInternal, SearchVideogameCatalogResultInternal, VideogameFilterInternal, VideogameInternal, VideogameSortByInternal } from 'app/data/models/internal/media-items/videogame';
import { MediaItemCatalogController, MediaItemController } from './media-item';

/**
 * The data controller for videogames
 */
export type VideogameController = MediaItemController<VideogameInternal, VideogameSortByInternal, VideogameFilterInternal>;

/**
 * The catalog controller for videogames
 */
export type VideogameCatalogController = MediaItemCatalogController<SearchVideogameCatalogResultInternal, CatalogVideogameInternal>;

/**
 * Singleton implementation of the videogame controller
 */
export const videogameController: VideogameController = new VideogameMockedController();

/**
 * Singleton implementation of the videogame catalog controller
 */
export const videogameCatalogController: VideogameCatalogController = new VideogameMockedCatalogController();
