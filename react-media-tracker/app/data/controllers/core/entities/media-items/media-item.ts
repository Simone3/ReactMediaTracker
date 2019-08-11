import { CatalogMediaItemInternal, MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal, SearchMediaItemCatalogResultInternal } from 'app/data/models/internal/media-items/media-item';

/**
 * The data controller for generic media items
 */
export interface MediaItemController<TMediaItemInternal extends MediaItemInternal, TMediaItemSortByInternal extends MediaItemSortByInternal, TMediaItemFilterInternal extends MediaItemFilterInternal> {

	/**
	 * Filters and orders the media items of a category
	 * @param categoryId the category
	 * @param filter the filter to apply
	 * @param sortBy the order to apply
	 * @returns the list of media items, as a promise
	 */
	filter(categoryId: string, filter: TMediaItemFilterInternal, sortBy: TMediaItemSortByInternal): Promise<TMediaItemInternal[]>;

	/**
	 * Getter for the default media item filter option
	 * @returns the filter
	 */
	getDefaultFilter(): TMediaItemFilterInternal;

	/**
	 * Getter for the default media item sort option
	 * @returns the sort by
	 */
	getDefaultSortBy(): TMediaItemSortByInternal;

	/**
	 * Searches the media items of a category
	 * @param categoryId the category
	 * @param searchTerm the search term
	 * @returns the list of media items, as a promise
	 */
	search(categoryId: string, searchTerm: string): Promise<TMediaItemInternal[]>;

	/**
	 * Saves a media item into the given category, adding it if the ID is not specified or updating it otherwise
	 * @param categoryId the category
	 * @param mediaItem the media item
	 * @returns a void promise
	 */
	save(categoryId: string, mediaItem: TMediaItemInternal): Promise<void>;

	/**
	 * Deletes a media item from the given category
	 * @param categoryId the category
	 * @param mediaItemId the media item
	 * @returns a void promise
	 */
	delete(categoryId: string, mediaItemId: string): Promise<void>;
}

/**
 * The catalog controller for generic media items
 */
export interface MediaItemCatalogController<TSearchMediaItemCatalogResultInternal extends SearchMediaItemCatalogResultInternal, TCatalogMediaItemInternal extends CatalogMediaItemInternal> {

	/**
	 * Searches the media item catalog
	 * @param searchTerm the search term
	 * @returns the list of catalog matches, as a promise
	 */
	search(searchTerm: string): Promise<TSearchMediaItemCatalogResultInternal[]>;
	
	/**
	 * Gets the details of a specific catalog item
	 * @param catalogId the catalog ID
	 * @returns the catalog details
	 */
	getDetails(catalogId: string): Promise<TCatalogMediaItemInternal>;
}

