import { MediaItemCatalogController, MediaItemController } from 'app/data/controllers/core/entities/media-items/media-item';
import { MockControllerHelper } from 'app/data/controllers/impl-mocks/mock-helper';
import { AppError } from 'app/data/models/internal/error';
import { CatalogMediaItemInternal, MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal, SearchMediaItemCatalogResultInternal } from 'app/data/models/internal/media-items/media-item';

/**
 * Mocked implementation of the MediaItemController that contains an in-memory list of media items
 * @see MediaItemController
 */
export abstract class MediaItemMockedController<TMediaItemInternal extends MediaItemInternal, TMediaItemSortByInternal extends MediaItemSortByInternal, TMediaItemFilterInternal extends MediaItemFilterInternal> extends MockControllerHelper implements MediaItemController<TMediaItemInternal, TMediaItemSortByInternal, TMediaItemFilterInternal> {

	protected delay = 0;
	protected errorProbability = 0;

	protected readonly mediaItems: {[category: string]: TMediaItemInternal[]} = {};

	/**
	 * @override
	 */
	public async filter(categoryId: string, filter: TMediaItemFilterInternal, sortBy: TMediaItemSortByInternal): Promise<TMediaItemInternal[]> {

		return this.resolveResult(() => {

			let categoryMediaItems = this.getCategoryMediaItems(categoryId);
			
			categoryMediaItems = this.mockFilter(categoryMediaItems, filter);
			categoryMediaItems = this.mockSort(categoryMediaItems, sortBy);

			return categoryMediaItems.slice();
		});
	}
	
	/**
	 * @override
	 */
	public async search(categoryId: string, searchTerm: string): Promise<TMediaItemInternal[]> {
			
		return this.resolveResult(() => {

			return this.getCategoryMediaItems(categoryId)
				.filter((item) => {
					return item.name.toLowerCase().includes(searchTerm.toLowerCase());
				})
				.slice();
		});
	}
	
	/**
	 * @override
	 */
	public async save(categoryId: string, mediaItem: TMediaItemInternal): Promise<void> {
		
		return this.resolveResult(() => {
			
			const categoryMediaItems = this.getCategoryMediaItems(categoryId);
			
			if(mediaItem.id) {

				const i = categoryMediaItems.findIndex((item) => {
					return item.id === mediaItem.id;
				});

				categoryMediaItems[i] = mediaItem;
			}
			else {

				mediaItem.id = this.randomId();
				categoryMediaItems.push(mediaItem);
			}
			
			this.mediaItems[categoryId] = categoryMediaItems;
		});
	}

	/**
	 * @override
	 */
	public async delete(categoryId: string, mediaItemId: string): Promise<void> {
		
		return this.resolveResult(() => {
			
			const categoryMediaItems = this.getCategoryMediaItems(categoryId);
			
			const i = categoryMediaItems.findIndex((item) => {
				return item.id === mediaItemId;
			});
			
			categoryMediaItems.splice(i, 1);

			this.mediaItems[categoryId] = categoryMediaItems;
		});
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

	/**
	 * Helper to get all media items in the category
	 * @param categoryId the category ID
	 * @returns the media items
	 */
	private getCategoryMediaItems(categoryId: string): TMediaItemInternal[] {

		let categoryMediaItems: TMediaItemInternal[];
		if(categoryId in this.mediaItems) {

			categoryMediaItems = this.mediaItems[categoryId];
		}
		else {
			
			categoryMediaItems = [];
		}
		return categoryMediaItems;
	}
}

/**
 * Mocked implementation of the MediaItemCatalogController that contains an in-memory list of media items
 * @see MediaItemCatalogController
 */
export class MediaItemMockedCatalogController<TSearchMediaItemCatalogResultInternal extends SearchMediaItemCatalogResultInternal, TCatalogMediaItemInternal extends CatalogMediaItemInternal> extends MockControllerHelper implements MediaItemCatalogController<TSearchMediaItemCatalogResultInternal, TCatalogMediaItemInternal> {

	protected readonly catalogList: TSearchMediaItemCatalogResultInternal[] = [];
	protected readonly catalogDetails: {[catalogId: string]: TCatalogMediaItemInternal} = {};
	
	/**
	 * @override
	 */
	public async search(searchTerm: string): Promise<TSearchMediaItemCatalogResultInternal[]> {
		
		return this.resolveResult(() => {
			
			return this.catalogList
				.filter((item) => {
					return item.name.toLowerCase().includes(searchTerm.toLowerCase());
				})
				.slice();
		});
	}
	
	/**
	 * @override
	 */
	public async getDetails(catalogId: string): Promise<TCatalogMediaItemInternal> {
		
		return this.resolveResult(() => {
			
			if(catalogId in this.catalogDetails) {

				return this.catalogDetails[catalogId];
			}
			else {
				
				throw AppError.GENERIC.withDetails('Mocked catalog details not found');
			}
		});
	}
}
