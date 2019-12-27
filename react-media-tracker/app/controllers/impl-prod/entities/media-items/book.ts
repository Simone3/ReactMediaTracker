import { BookDefinitionsController } from 'app/controllers/core/entities/media-items/book';
import { BookFilterInternal, BookInternal, BookSortByInternal, DEFAULT_BOOK } from 'app/data/models/internal/media-items/book';

/**
 * Production implementation of the BookDefinitionsController
 * @see BookDefinitionsController
 */
export class BookDefinitionsControllerImpl implements BookDefinitionsController {

	/**
	 * @override
	 */
	public getDefaultFilter(): BookFilterInternal {
		
		return {
			status: 'CURRENT'
		};
	}

	/**
	 * @override
	 */
	public getDefaultSortBy(): BookSortByInternal[] {

		return [{
			field: 'ACTIVE',
			ascending: false
		}, {
			field: 'IMPORTANCE',
			ascending: false
		}, {
			field: 'RELEASE_DATE',
			ascending: true
		}];
	}

	/**
	 * @override
	 */
	public getCreatorNames(mediaItem: BookInternal): string[] | undefined {

		return mediaItem.authors;
	}

	/**
	 * @override
	 */
	public getDurationValue(mediaItem: BookInternal): number | undefined {

		return mediaItem.pagesNumber;
	}

	/**
	 * @override
	 */
	public getDefaultMediaItem(): BookInternal {
		
		return DEFAULT_BOOK;
	}
}
