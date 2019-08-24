import { MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal } from 'app/data/models/internal/media-items/media-item';
import { COMPLETE_DELETING_MEDIA_ITEM, COMPLETE_FETCHING_MEDIA_ITEMS, COMPLETE_INLINE_UPDATING_MEDIA_ITEM, DELETE_MEDIA_ITEM, FAIL_DELETING_MEDIA_ITEM, FAIL_FETCHING_MEDIA_ITEMS, FAIL_INLINE_UPDATING_MEDIA_ITEM, FETCH_MEDIA_ITEMS, HIGHLIGHT_MEDIA_ITEM, MARK_MEDIA_ITEM_AS_ACTIVE, MARK_MEDIA_ITEM_AS_COMPLETE, MARK_MEDIA_ITEM_AS_REDO, REMOVE_MEDIA_ITEM_HIGHTLIGHT, SEARCH_MEDIA_ITEMS, START_DELETING_MEDIA_ITEM, START_FETCHING_MEDIA_ITEMS, START_INLINE_UPDATING_MEDIA_ITEM, START_MEDIA_ITEMS_SEARCH_MODE, START_MEDIA_ITEMS_SET_FILTERS_MODE, STOP_MEDIA_ITEMS_SEARCH_MODE, STOP_MEDIA_ITEMS_SET_FILTERS_MODE, SUBMIT_MEDIA_ITEMS_FILTERS } from './const';
import { CompleteDeletingMediaItemAction, CompleteFetchingMediaItemsAction, CompleteInlineUpdatingMediaItemAction, DeleteMediaItemAction, FailDeletingMediaItemAction, FailFetchingMediaItemsAction, FailInlineUpdatingMediaItemAction, FetchMediaItemsAction, HighlightMediaItemAction, MarkMediaItemAsActiveAction, MarkMediaItemAsCompleteAction, MarkMediaItemAsRedoAction, RemoveMediaItemHighlightAction, SearchMediaItemsAction, StartDeletingMediaItemAction, StartFetchingMediaItemsAction, StartInlineUpdatingMediaItemAction, StartMediaItemsSearchModeAction, StartMediaItemsSetFiltersModeAction, StopMediaItemsSearchModeAction, StopMediaItemsSetFiltersModeAction, SubmitMediaItemsFiltersAction } from './types';

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

/**
 * Generator for the search media items list action, which causes the request media items action, the async media items search and then the receive media items action
 * @param term the search term (non-null and non-blank)
 * @returns the action
 */
export const searchMediaItems = (term: string): SearchMediaItemsAction => {
	
	return {
		type: SEARCH_MEDIA_ITEMS,
		term: term
	};
};

/**
 * Generator for the start media items search mode action, which allows to start searching for media items by term
 * @returns the action
 */
export const startMediaItemsSearchMode = (): StartMediaItemsSearchModeAction => {
	
	return {
		type: START_MEDIA_ITEMS_SEARCH_MODE
	};
};

/**
 * Generator for the start media items search mode action, which allows to stop searching for media items by term
 * @returns the action
 */
export const stopMediaItemsSearchMode = (): StopMediaItemsSearchModeAction => {
	
	return {
		type: STOP_MEDIA_ITEMS_SEARCH_MODE
	};
};

/**
 * Generator for the start media items "set filters" mode action, which allows to show the filter form for media items
 * @returns the action
 */
export const startMediaItemsSetFiltersMode = (): StartMediaItemsSetFiltersModeAction => {
	
	return {
		type: START_MEDIA_ITEMS_SET_FILTERS_MODE
	};
};

/**
 * Generator for the start media items "set filters" mode action, which allows to hide the filter form for media items
 * @returns the action
 */
export const stopMediaItemsSetFiltersMode = (): StopMediaItemsSetFiltersModeAction => {
	
	return {
		type: STOP_MEDIA_ITEMS_SET_FILTERS_MODE
	};
};

/**
 * Generator for the submit media items filters, which sets the current category filters
 * @param filter the filter options
 * @param sortBy the sort by options
 * @returns the action
 */
export const submitMediaItemsFilters = (filter: MediaItemFilterInternal, sortBy: MediaItemSortByInternal[]): SubmitMediaItemsFiltersAction => {
	
	return {
		type: SUBMIT_MEDIA_ITEMS_FILTERS,
		filter: filter,
		sortBy: sortBy
	};
};

