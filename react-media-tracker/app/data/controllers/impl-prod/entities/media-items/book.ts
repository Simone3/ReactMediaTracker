import { BookDefinitionsController } from 'app/data/controllers/core/entities/media-items/book';
import { BookFilterInternal, BookInternal, BookSortByInternal } from 'app/data/models/internal/media-items/book';

/**
 * Production implementation of the BookDefinitionsController
 * @see BookDefinitionsController
 */
export class BookDefinitionsControllerImpl implements BookDefinitionsController {

	/**
	 * @override
	 */
	public getDefaultFilter(): BookFilterInternal {
		
		return {};
	}

	/**
	 * @override
	 */
	public getDefaultSortBy(): BookSortByInternal {
		
		return {
			field: 'NAME',
			ascending: true
		};
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
}
