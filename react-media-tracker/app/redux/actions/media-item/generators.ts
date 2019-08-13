import { CategoryInternal } from 'app/data/models/internal/category';
import { MediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { COMPLETE_DELETING_MEDIA_ITEM, COMPLETE_FETCHING_MEDIA_ITEMS, COMPLETE_INLINE_UPDATING_MEDIA_ITEM, DELETE_MEDIA_ITEM, FAIL_DELETING_MEDIA_ITEM, FAIL_FETCHING_MEDIA_ITEMS, FAIL_INLINE_UPDATING_MEDIA_ITEM, FETCH_MEDIA_ITEMS, HIGHLIGHT_MEDIA_ITEM, MARK_MEDIA_ITEM_AS_ACTIVE, MARK_MEDIA_ITEM_AS_COMPLETE, MARK_MEDIA_ITEM_AS_REDO, OPEN_MEDIA_ITEMS_LIST, REMOVE_MEDIA_ITEM_HIGHTLIGHT, START_DELETING_MEDIA_ITEM, START_FETCHING_MEDIA_ITEMS, START_INLINE_UPDATING_MEDIA_ITEM } from './const';
import { CompleteDeletingMediaItemAction, CompleteFetchingMediaItemsAction, CompleteInlineUpdatingMediaItemAction, DeleteMediaItemAction, FailDeletingMediaItemAction, FailFetchingMediaItemsAction, FailInlineUpdatingMediaItemAction, FetchMediaItemsAction, HighlightMediaItemAction, MarkMediaItemAsActiveAction, MarkMediaItemAsCompleteAction, MarkMediaItemAsRedoAction, OpenMediaItemsListAction, RemoveMediaItemHighlightAction, StartDeletingMediaItemAction, StartFetchingMediaItemsAction, StartInlineUpdatingMediaItemAction } from './types';

/**
 * Generator for the open media items list action, which sets the category linked with the list
 * @param category the linked category
 * @returns the action
 */
export const openMediaItemsList = (category: CategoryInternal): OpenMediaItemsListAction => {
	
	return {
		type: OPEN_MEDIA_ITEMS_LIST,
		category: category
	};
};

/**
 * Generator for the fetch media items list action, which causes the request media items action, the async media items fetch and then the receive media items action
 * @returns the action
 */
export const fetchMediaItems = (): FetchMediaItemsAction => {
	
	return {
		type: FETCH_MEDIA_ITEMS
	};
};

/**
 * Generator for the start fetching media items action, which marks the start of the media items list fetching operation
 * @returns the action
 */
export const startFetchingMediaItems = (): StartFetchingMediaItemsAction => {
	
	return {
		type: START_FETCHING_MEDIA_ITEMS
	};
};

/**
 * Generator for the complete fetching media items action, which marks the successful end of the media items list fetching operation
 * @param mediaItems the fetched media items, possibly an empty array
 * @returns the action
 */
export const completeFetchingMediaItems = (mediaItems: MediaItemInternal[]): CompleteFetchingMediaItemsAction => {
	
	return {
		type: COMPLETE_FETCHING_MEDIA_ITEMS,
		mediaItems: mediaItems
	};
};

/**
 * Generator for the fail fetching media items action, which marks the unsuccessful end of the media items list fetching operation
 * @returns the action
 */
export const failFetchingMediaItems = (): FailFetchingMediaItemsAction => {
	
	return {
		type: FAIL_FETCHING_MEDIA_ITEMS
	};
};

/**
 * Generator for the delete media item action, which causes the start deleting media item action, the async media item removal and then the complete deleting media item action
 * @param mediaItem the media item data
 * @returns the action
 */
export const deleteMediaItem = (mediaItem: MediaItemInternal): DeleteMediaItemAction => {
	
	return {
		type: DELETE_MEDIA_ITEM,
		mediaItem: mediaItem
	};
};

/**
 * Generator for the start deleting media item action, which marks the start of the media item deleting operation
 * @returns the action
 */
export const startDeletingMediaItem = (): StartDeletingMediaItemAction => {
	
	return {
		type: START_DELETING_MEDIA_ITEM
	};
};

/**
 * Generator for the complete deleting media item action, which marks the successful end of the media item deleting operation
 * @returns the action
 */
export const completeDeletingMediaItem = (): CompleteDeletingMediaItemAction => {
	
	return {
		type: COMPLETE_DELETING_MEDIA_ITEM
	};
};

/**
 * Generator for the fail deleting media item action, which marks the unsuccessful end of the media item deleting operation
 * @returns the action
 */
export const failDeletingMediaItem = (): FailDeletingMediaItemAction => {
	
	return {
		type: FAIL_DELETING_MEDIA_ITEM
	};
};

/**
 * Generator for the mark media item as active action, which causes the start inline updating media item action, the async media item update and then the complete inline updating media item action
 * @param mediaItem the media item data
 * @returns the action
 */
export const markMediaItemAsActive = (mediaItem: MediaItemInternal): MarkMediaItemAsActiveAction => {
	
	return {
		type: MARK_MEDIA_ITEM_AS_ACTIVE,
		mediaItem: mediaItem
	};
};

/**
 * Generator for the mark media item as complete action, which causes the start inline updating media item action, the async media item update and then the complete inline updating media item action
 * @param mediaItem the media item data
 * @returns the action
 */
export const markMediaItemAsComplete = (mediaItem: MediaItemInternal): MarkMediaItemAsCompleteAction => {
	
	return {
		type: MARK_MEDIA_ITEM_AS_COMPLETE,
		mediaItem: mediaItem
	};
};

/**
 * Generator for the mark media item as redo action, which causes the start inline updating media item action, the async media item update and then the complete inline updating media item action
 * @param mediaItem the media item data
 * @returns the action
 */
export const markMediaItemAsRedo = (mediaItem: MediaItemInternal): MarkMediaItemAsRedoAction => {
	
	return {
		type: MARK_MEDIA_ITEM_AS_REDO,
		mediaItem: mediaItem
	};
};

/**
 * Generator for the start inline updating media item action, which marks the start of the media item deleting operation
 * @returns the action
 */
export const startInlineUpdatingMediaItem = (): StartInlineUpdatingMediaItemAction => {
	
	return {
		type: START_INLINE_UPDATING_MEDIA_ITEM
	};
};

/**
 * Generator for the complete inline updating media item action, which marks the successful end of the inline media item updating operation
 * @returns the action
 */
export const completeInlineUpdatingMediaItem = (): CompleteInlineUpdatingMediaItemAction => {
	
	return {
		type: COMPLETE_INLINE_UPDATING_MEDIA_ITEM
	};
};

/**
 * Generator for the fail inline updating media item action, which marks the unsuccessful end of the inline media item updating operation
 * @returns the action
 */
export const failInlineUpdatingMediaItem = (): FailInlineUpdatingMediaItemAction => {
	
	return {
		type: FAIL_INLINE_UPDATING_MEDIA_ITEM
	};
};

/**
 * Generator for the highlight media item action, which marks a media item as highlighted
 * @param mediaItem the media item
 * @returns the action
 */
export const highlightMediaItem = (mediaItem: MediaItemInternal): HighlightMediaItemAction => {
	
	return {
		type: HIGHLIGHT_MEDIA_ITEM,
		mediaItem: mediaItem
	};
};

/**
 * Generator for the remove media item highlight action, which removes any highlighted media item
 * @returns the action
 */
export const removeMediaItemHighlight = (): RemoveMediaItemHighlightAction => {
	
	return {
		type: REMOVE_MEDIA_ITEM_HIGHTLIGHT
	};
};
