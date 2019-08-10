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
	 * Flag to tell if the app is currently waiting for the media items list
	 */
	readonly isFetching: boolean;

	/**
	 * Flag to tell if the app is currently waiting for a media item to be deleted
	 */
	readonly isDeleting: boolean;

	/**
	 * Flag to tell if the media items list was marked as invalid, i.e. it requires a reload
	 */
	readonly requiresReload: boolean;

	/**
	 * The currently highlighted (e.g. context menu is open) media item, or undefined if none is highlighted
	 */
	readonly highlightedMediaItem: MediaItemInternal | undefined;
}
