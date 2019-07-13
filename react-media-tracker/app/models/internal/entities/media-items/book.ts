import { MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal, MediaItemSortFieldInternal } from 'app/models/internal/entities/media-items/media-item';

/**
 * Model for a book, internal type just for display purposes
 */
export type BookInternal = MediaItemInternal & {

	id: string;
	authors?: string[];
	pagesNumber?: number;
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

