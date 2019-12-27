import { MediaItemCatalogController, MediaItemController, MediaItemDefinitionsController } from 'app/controllers/core/entities/media-items/media-item';
import { BookMockedCatalogController, BookMockedController } from 'app/controllers/impl-mocks/entities/media-items/book';
import { BookDefinitionsControllerImpl } from 'app/controllers/impl-prod/entities/media-items/book';
import { BookFilterInternal, BookInternal, BookSortByInternal, CatalogBookInternal, SearchBookCatalogResultInternal } from 'app/data/models/internal/media-items/book';

/**
 * The data controller for books
 * @see MediaItemController
 */
export type BookController = MediaItemController<BookInternal, BookSortByInternal, BookFilterInternal>;

/**
 * The catalog controller for books
 * @see MediaItemCatalogController
 */
export type BookCatalogController = MediaItemCatalogController<SearchBookCatalogResultInternal, CatalogBookInternal>;

/**
 * The definitions controller for books
 * @see MediaItemDefinitionsController
 */
export type BookDefinitionsController = MediaItemDefinitionsController<BookInternal, BookSortByInternal, BookFilterInternal>;

/**
 * Singleton implementation of the book controller
 */
export const bookController: BookController = new BookMockedController();

/**
 * Singleton implementation of the book catalog controller
 */
export const bookCatalogController: BookCatalogController = new BookMockedCatalogController();

/**
 * Singleton implementation of the book definitions controller
 */
export const bookDefinitionsController: BookDefinitionsController = new BookDefinitionsControllerImpl();
