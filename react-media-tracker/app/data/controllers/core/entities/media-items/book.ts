import { BookMockedCatalogController, BookMockedController } from 'app/data/controllers/impl-mocks/entities/media-items/book';
import { BookFilterInternal, BookInternal, BookSortByInternal, CatalogBookInternal, SearchBookCatalogResultInternal } from 'app/data/models/internal/media-items/book';
import { MediaItemCatalogController, MediaItemController } from './media-item';

/**
 * The data controller for books
 */
export type BookController = MediaItemController<BookInternal, BookSortByInternal, BookFilterInternal>;

/**
 * The catalog controller for books
 */
export type BookCatalogController = MediaItemCatalogController<SearchBookCatalogResultInternal, CatalogBookInternal>;

/**
 * Singleton implementation of the book controller
 */
export const bookController: BookController = new BookMockedController();

/**
 * Singleton implementation of the book catalog controller
 */
export const bookCatalogController: BookCatalogController = new BookMockedCatalogController();
