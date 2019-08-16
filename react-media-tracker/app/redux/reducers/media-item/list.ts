import { mediaItemDefinitionsControllerFactory } from 'app/factories/controller-factories';
import { COMPLETE_DELETING_MEDIA_ITEM, COMPLETE_FETCHING_MEDIA_ITEMS, COMPLETE_INLINE_UPDATING_MEDIA_ITEM, FAIL_DELETING_MEDIA_ITEM, FAIL_FETCHING_MEDIA_ITEMS, FAIL_INLINE_UPDATING_MEDIA_ITEM, HIGHLIGHT_MEDIA_ITEM, OPEN_MEDIA_ITEMS_LIST, REMOVE_MEDIA_ITEM_HIGHTLIGHT, START_DELETING_MEDIA_ITEM, START_FETCHING_MEDIA_ITEMS, START_INLINE_UPDATING_MEDIA_ITEM, START_MEDIA_ITEMS_SEARCH_MODE, STOP_MEDIA_ITEMS_SEARCH_MODE } from 'app/redux/actions/media-item/const';
import { CompleteFetchingMediaItemsAction, HighlightMediaItemAction, OpenMediaItemsListAction } from 'app/redux/actions/media-item/types';
import { MediaItemsListState } from 'app/redux/state/media-item';
import { Action } from 'redux';

/**
 * The initial state for the media items list
 */
const initialState: MediaItemsListState = {
	status: 'IDLE',
	mode: 'NORMAL',
	category: undefined,
	filter: undefined,
	sortBy: undefined,
	mediaItems: [],
	highlightedMediaItem: undefined
};

/**
 * Reducer for the media items list portion of the global state
 * @param state previous state
 * @param action an action
 * @returns the new state
 */
export const mediaItemsList = (state: MediaItemsListState = initialState, action: Action): MediaItemsListState => {
	
	switch(action.type) {
	
		// When the media items page is started, the category and its default settings are loaded
		case OPEN_MEDIA_ITEMS_LIST: {

			const openMediaItemsListAction = action as OpenMediaItemsListAction;

			const category = openMediaItemsListAction.category;

			const mediaItemDefinitionsController = mediaItemDefinitionsControllerFactory.get(category);
			const defaultFilter = mediaItemDefinitionsController.getDefaultFilter();
			const defaultSortBy = mediaItemDefinitionsController.getDefaultSortBy();

			return {
				...initialState,
				category: category,
				filter: defaultFilter,
				sortBy: defaultSortBy
			};
		}

		// When the app starts fetching the list of media items, the status changes to show the loading indicator
		case START_FETCHING_MEDIA_ITEMS: {

			return {
				...state,
				status: 'FETCHING'
			};
		}
	
		// When the app completes the fetching process, the status is reset and the retrieved list is saved
		case COMPLETE_FETCHING_MEDIA_ITEMS: {

			const receiveMediaItemsAction = action as CompleteFetchingMediaItemsAction;
			
			return {
				...state,
				status: 'IDLE',
				mediaItems: receiveMediaItemsAction.mediaItems
			};
		}

		// When the app fails to fetch the media items, the status is reset and an empty list is loaded (an error is shown by the global handler)
		case FAIL_FETCHING_MEDIA_ITEMS: {

			return {
				...state,
				status: 'IDLE',
				mediaItems: []
			};
		}

		// When the app starts deleting a media item, the status changes to show the loading indicator
		case START_DELETING_MEDIA_ITEM: {

			return {
				...state,
				status: 'DELETING'
			};
		}

		// When the app completes the delete process, the list is marked for reload
		case COMPLETE_DELETING_MEDIA_ITEM: {
		
			return {
				...state,
				status: 'REQUIRES_RELOAD'
			};
		}

		// When the app fails to delete a media item, the status is reset (an error is shown by the global handler)
		case FAIL_DELETING_MEDIA_ITEM: {
		
			return {
				...state,
				status: 'IDLE'
			};
		}
		
		// When the app starts an inline media item update, the status changes to show the loading indicator
		case START_INLINE_UPDATING_MEDIA_ITEM: {

			return {
				...state,
				status: 'INLINE_UPDATING'
			};
		}

		// When the app completes the inline update process, the list is marked for reload
		case COMPLETE_INLINE_UPDATING_MEDIA_ITEM: {
		
			return {
				...state,
				status: 'REQUIRES_RELOAD'
			};
		}

		// When the app fails to inline update a media item, the status is reset (an error is shown by the global handler)
		case FAIL_INLINE_UPDATING_MEDIA_ITEM: {
		
			return {
				...state,
				status: 'IDLE'
			};
		}
		
		// When a media item is highlighted (e.g. to open the context menu), the corresponding state field is set
		case HIGHLIGHT_MEDIA_ITEM: {

			const highlightMediaItemAction = action as HighlightMediaItemAction;

			return {
				...state,
				highlightedMediaItem: highlightMediaItemAction.mediaItem
			};
		}

		// When a media item is no longer highlighted (e.g. to close the context menu), the corresponding state field is reset
		case REMOVE_MEDIA_ITEM_HIGHTLIGHT: {

			return {
				...state,
				highlightedMediaItem: undefined
			};
		}
		
		// When the search mode is started, the mode field is set
		case START_MEDIA_ITEMS_SEARCH_MODE: {

			return {
				...state,
				mode: 'SEARCH'
			};
		}
		
		// When the search mode is closed, the mode field is reset and the list is marked for reload (i.e. the standard version of the list is fetched)
		case STOP_MEDIA_ITEMS_SEARCH_MODE: {

			return {
				...state,
				mode: 'NORMAL',
				status: 'REQUIRES_RELOAD'
			};
		}

		default:
			return state;
	}
};
