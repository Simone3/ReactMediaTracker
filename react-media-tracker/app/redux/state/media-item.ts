import { CategoryInternal } from 'app/data/models/internal/category';
import { MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal } from 'app/data/models/internal/media-items/media-item';

/**
 * Portion of the internal state with the media items list information
 */
export type MediaItemsListState = {

	/**
	 * The category linked with this list of media items
	 */
	readonly category?: CategoryInternal;

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
	 * The current status of the media items list
	 */
	readonly status: MediaItemListStatus;

	/**
	 * The currently highlighted (e.g. context menu is open) media item, or undefined if none is highlighted
	 */
	readonly highlightedMediaItem: MediaItemInternal | undefined;
}

/**
 * The current status of the media items list
 */
export type MediaItemListStatus = 'IDLE' | 'FETCHING' | 'REQUIRES_RELOAD' | 'DELETING' | 'INLINE_UPDATING';
