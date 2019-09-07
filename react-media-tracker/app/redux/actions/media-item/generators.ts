import { CategoryInternal } from 'app/data/models/internal/category';
import { MediaItemFilterInternal, MediaItemInternal, MediaItemSortByInternal } from 'app/data/models/internal/media-items/media-item';
import { COMPLETE_DELETING_MEDIA_ITEM, COMPLETE_FETCHING_MEDIA_ITEMS, COMPLETE_INLINE_UPDATING_MEDIA_ITEM, COMPLETE_SAVING_MEDIA_ITEM, DELETE_MEDIA_ITEM, FAIL_DELETING_MEDIA_ITEM, FAIL_FETCHING_MEDIA_ITEMS, FAIL_INLINE_UPDATING_MEDIA_ITEM, FAIL_SAVING_MEDIA_ITEM, FETCH_MEDIA_ITEMS, HIGHLIGHT_MEDIA_ITEM, LOAD_MEDIA_ITEM_DETAILS, LOAD_NEW_MEDIA_ITEM_DETAILS, MARK_MEDIA_ITEM_AS_ACTIVE, MARK_MEDIA_ITEM_AS_COMPLETE, MARK_MEDIA_ITEM_AS_REDO, REMOVE_MEDIA_ITEM_HIGHTLIGHT, REQUEST_MEDIA_ITEM_SAVE, SAVE_MEDIA_ITEM, SEARCH_MEDIA_ITEMS, SET_MEDIA_ITEM_FORM_STATUS, START_DELETING_MEDIA_ITEM, START_FETCHING_MEDIA_ITEMS, START_INLINE_UPDATING_MEDIA_ITEM, START_MEDIA_ITEMS_SEARCH_MODE, START_MEDIA_ITEMS_SET_FILTERS_MODE, START_SAVING_MEDIA_ITEM, STOP_MEDIA_ITEMS_SEARCH_MODE, STOP_MEDIA_ITEMS_SET_FILTERS_MODE, SUBMIT_MEDIA_ITEMS_FILTERS } from './const';
import { CompleteDeletingMediaItemAction, CompleteFetchingMediaItemsAction, CompleteInlineUpdatingMediaItemAction, CompleteSavingMediaItemAction, DeleteMediaItemAction, FailDeletingMediaItemAction, FailFetchingMediaItemsAction, FailInlineUpdatingMediaItemAction, FailSavingMediaItemAction, FetchMediaItemsAction, HighlightMediaItemAction, LoadMediaItemDetailsAction, LoadNewMediaItemDetailsAction, MarkMediaItemAsActiveAction, MarkMediaItemAsCompleteAction, MarkMediaItemAsRedoAction, RemoveMediaItemHighlightAction, RequestMediaItemSaveAction, SaveMediaItemAction, SearchMediaItemsAction, SetMediaItemFormStatusAction, StartDeletingMediaItemAction, StartFetchingMediaItemsAction, StartInlineUpdatingMediaItemAction, StartMediaItemsSearchModeAction, StartMediaItemsSetFiltersModeAction, StartSavingMediaItemAction, StopMediaItemsSearchModeAction, StopMediaItemsSetFiltersModeAction, SubmitMediaItemsFiltersAction } from './types';

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
 * Generator for the submit media items filters, which sets the current media item filters
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

/**
 * Generator for the load new media item action, which resets the media item details state to the initial values
 * @param category the current category
 * @returns the action
 */
export const loadNewMediaItemDetails = (category: CategoryInternal): LoadNewMediaItemDetailsAction => {
	
	return {
		type: LOAD_NEW_MEDIA_ITEM_DETAILS,
		category: category
	};
};

/**
 * Generator for the load existing media item action, which sets the media item details state
 * @param mediaItem the media item data
 * @returns the action
 */
export const loadMediaItemDetails = (mediaItem: MediaItemInternal): LoadMediaItemDetailsAction => {
	
	return {
		type: LOAD_MEDIA_ITEM_DETAILS,
		mediaItem: mediaItem
	};
};

/**
 * Generator for the set media item form status, which sets the current status of the media item details form
 * @param valid true if the form is currently valid (no validation errors)
 * @param dirty true if the form is currently dirty (one or more fields changed)
 * @returns the action
 */
export const setMediaItemFormStatus = (valid: boolean, dirty: boolean): SetMediaItemFormStatusAction => {
	
	return {
		type: SET_MEDIA_ITEM_FORM_STATUS,
		valid: valid,
		dirty: dirty
	};
};

/**
 * Generator for the request media item save action, which requests the media item form validation and, if OK, submission
 * @returns the action
 */
export const requestMediaItemSave = (): RequestMediaItemSaveAction => {
	
	return {
		type: REQUEST_MEDIA_ITEM_SAVE
	};
};

/**
 * Generator for the save media item action, which causes the start saving media item action, the async media item store and then the complete saving media item action
 * @param mediaItem the media item data
 * @returns the action
 */
export const saveMediaItem = (mediaItem: MediaItemInternal): SaveMediaItemAction => {
	
	return {
		type: SAVE_MEDIA_ITEM,
		mediaItem: mediaItem
	};
};

/**
 * Generator for the start saving media item action, which marks the start of the media item saving operation
 * @param mediaItem the media item data
 * @returns the action
 */
export const startSavingMediaItem = (mediaItem: MediaItemInternal): StartSavingMediaItemAction => {
	
	return {
		type: START_SAVING_MEDIA_ITEM,
		mediaItem: mediaItem
	};
};

/**
 * Generator for the complete saving media item action, which marks the successful end of the media item saving operation
 * @returns the action
 */
export const completeSavingMediaItem = (): CompleteSavingMediaItemAction => {
	
	return {
		type: COMPLETE_SAVING_MEDIA_ITEM
	};
};

/**
 * Generator for the complete saving media item action, which marks the unsuccessful end of the media item saving operation
 * @returns the action
 */
export const failSavingMediaItem = (): FailSavingMediaItemAction => {
	
	return {
		type: FAIL_SAVING_MEDIA_ITEM
	};
};

