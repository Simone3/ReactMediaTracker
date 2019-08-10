import { MediaItemController } from 'app/data/controllers/core/entities/media-items/media-item';
import { MockControllerHelper } from 'app/data/controllers/impl-mocks/mock-helper';
import { MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal } from 'app/data/models/internal/media-items/media-item';

/**
 * Mocked implementation of the MediaItemController that contains an in-memory list of media items
 * @see MediaItemController
 */
export abstract class MediaItemMockedController<TMediaItemInternal extends MediaItemInternal, TMediaItemSortByInternal extends MediaItemSortByInternal, TMediaItemFilterInternal extends MediaItemFilterInternal> extends MockControllerHelper implements MediaItemController<TMediaItemInternal, TMediaItemSortByInternal, TMediaItemFilterInternal> {
	
	protected readonly mediaItems: {[category: string]: TMediaItemInternal[]} = {};

	/**
	 * @override
	 */
	public async filter(categoryId: string, filter: TMediaItemFilterInternal, sortBy: TMediaItemSortByInternal): Promise<TMediaItemInternal[]> {

		let categoryMediaItems: TMediaItemInternal[];
		if('categoryId' in this.mediaItems) {

			categoryMediaItems = this.mediaItems[categoryId];
		}
		else {
			
			categoryMediaItems = [];
		}

		categoryMediaItems = this.mockFilter(categoryMediaItems, filter);
		categoryMediaItems = this.mockSort(categoryMediaItems, sortBy);

		return categoryMediaItems.slice();
	}

	/**
	 * Allows to mock-sort a list
	 * @param mediaItems the media items
	 * @param sortBy the sort request
	 * @returns the sorted media items
	 */
	protected abstract mockSort(mediaItems: TMediaItemInternal[], sortBy: TMediaItemSortByInternal): TMediaItemInternal[];

	/**
	 * Allows to mock-filter a list
	 * @param mediaItems the media items
	 * @param filter the filter
	 * @returns the filtered media items
	 */
	protected mockFilter(mediaItems: TMediaItemInternal[], filter: TMediaItemFilterInternal): TMediaItemInternal[] {

		if(filter.importance) {

			return mediaItems.filter((item) => {

				return item.importance === filter.importance;
			});
		}
		else {

			console.log('Filter not currently mocked!');
			return mediaItems;
		}
	}
}

// /**
//  * Mocked implementation of the MediaItemCatalogController that contains an in-memory list of media items
//  * @see MediaItemCatalogController
//  */
// export class MediaItemMockedCatalogController extends MockControllerHelper implements MediaItemCatalogController {

// }
