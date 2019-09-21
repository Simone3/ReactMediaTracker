import { CatalogMediaItemInternal, MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal, MediaItemSortFieldInternal, SearchMediaItemCatalogResultInternal } from 'app/data/models/internal/media-items/media-item';
import { miscUtils } from 'app/utilities/misc-utils';

/**
 * Util type to extract common fields to both book entities and catalog entries
 */
type CoreBookDataInternal = {

	authors?: string[];
	pagesNumber?: number;
};

/**
 * Model for a book, internal type just for display purposes
 */
export type BookInternal = MediaItemInternal & CoreBookDataInternal & {

}

/**
 * Book filtering options, internal type just for display purposes
 */
export type BookFilterInternal = MediaItemFilterInternal & {

}

/**
 * Values for book ordering options, internal type just for display purposes
 */
export type BookSortFieldInternal = MediaItemSortFieldInternal | 'AUTHOR';

/**
 * Books sort by options, internal type just for display purposes
 */
export type BookSortByInternal = MediaItemSortByInternal & {

	field: BookSortFieldInternal;
}

/**
 * Model for a media item with base properties, internal type just for display purposes
 */
export type CatalogBookInternal = CatalogMediaItemInternal & CoreBookDataInternal & {

};

/**
 * Media item catalog search result, internal type just for display purposes
 */
export type SearchBookCatalogResultInternal = SearchMediaItemCatalogResultInternal & {

};

/**
 * List of all CatalogBookInternal fields
 */
export const CATALOG_BOOK_FIELDS: (keyof CatalogBookInternal)[] = miscUtils.buildArrayOfFields<CatalogBookInternal>({
	name: '',
	description: '',
	authors: [],
	pagesNumber: 0,
	genres: [],
	imageUrl: '',
	releaseDate: new Date()
});

/**
 * The default initial book, internal type just for display purposes
 */
export const DEFAULT_BOOK: BookInternal = {
	id: '',
	name: '',
	mediaType: 'BOOK',
	status: 'NEW',
	importance: 'VERY_IMPORTANT'
};
