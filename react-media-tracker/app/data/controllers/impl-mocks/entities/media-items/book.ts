import { BookCatalogController, BookController } from 'app/data/controllers/core/entities/media-items/book';
import { MediaItemMockedCatalogController, MediaItemMockedController } from 'app/data/controllers/impl-mocks/entities/media-items/media-item';
import { BookFilterInternal, BookInternal, BookSortByInternal, CatalogBookInternal, SearchBookCatalogResultInternal } from 'app/data/models/internal/media-items/book';

/**
 * Mocked implementation of the BookController that contains an in-memory list of books
 * @see BookController
 */
export class BookMockedController extends MediaItemMockedController<BookInternal, BookSortByInternal, BookFilterInternal> implements BookController {

	protected readonly mediaItems: {[category: string]: BookInternal[]} = {
		1: [{
			id: '1',
			name: 'My First Book',
			importance: 30
		}, {
			id: '2',
			name: 'My Second Book',
			importance: 10
		}, {
			id: '3',
			name: 'My Third Book',
			importance: 20
		}, {
			id: '4',
			name: 'My Fourth Book',
			importance: 10
		}]
	};

	/**
	 * @override
	 */
	protected mockSort(mediaItems: BookInternal[], sortBy: BookSortByInternal): BookInternal[] {
		
		if(sortBy.field === 'IMPORTANCE') {

			return mediaItems.sort((first, second) => {
				return first.importance - second.importance;
			});
		}
		else {
			
			console.log('Sort option not currently mocked!');
			return mediaItems;
		}
	}
}

/**
 * Mocked implementation of the BookCatalogController that contains an in-memory list of books
 * @see BookCatalogController
 */
export class BookMockedCatalogController extends MediaItemMockedCatalogController<SearchBookCatalogResultInternal, CatalogBookInternal> implements BookCatalogController {

}
