import { CategoryInternal } from 'app/data/models/internal/category';
import { MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal } from 'app/data/models/internal/media-items/media-item';

/**
 * Portion of the internal state with the media items list information
 */
export type MediaItemsListState = {
	
	/**
	 * The current status (e.g. allows to invalidate, show the loading indicator, etc.)
	 */
	readonly status: MediaItemsListStatus;
	
	/**
	 * The current mode (e.g. allows to toggle between standard and search mode)
	 */
	readonly mode: MediaItemsListMode;

	/**
	 * The category linked with this list of media items
	 */
	readonly category?: CategoryInternal;

	/**
	 * The current search term
	 */
	readonly searchTerm?: string;

	/**
	 * The current media item filter
	 */
	readonly filter?: MediaItemFilterInternal;

	/**
	 * The current media item order filter
	 */
	readonly sortBy?: MediaItemSortByInternal;
	
	/**
	 * The list of available media items
	 */
	readonly mediaItems: MediaItemInternal[];

	/**
	 * The currently highlighted (e.g. context menu is open) media item, or undefined if none is highlighted
	 */
	readonly highlightedMediaItem: MediaItemInternal | undefined;
}

/**
 * The current status (e.g. allows to invalidate, show the loading indicator, etc.)
 */
export type MediaItemsListStatus = 'IDLE' | 'FETCHING' | 'REQUIRES_RELOAD' | 'DELETING' | 'INLINE_UPDATING';

/**
 * The current mode (e.g. allows to toggle between standard and search mode)
 */
export type MediaItemsListMode = 'NORMAL' | 'SEARCH';
