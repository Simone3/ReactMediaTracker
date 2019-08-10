import { CategoryInternal } from 'app/data/models/internal/entities/category';
import { MediaItemInternal } from 'app/data/models/internal/entities/media-items/media-item';

/**
 * Portion of the internal state with the media items list information
 */
export type MediaItemsListState = {

	/**
	 * The category linked with this list of media items
	 */
	readonly category?: CategoryInternal;

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
