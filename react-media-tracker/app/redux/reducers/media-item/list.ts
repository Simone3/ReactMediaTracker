import { COMPLETE_FETCHING_MEDIA_ITEMS, FAIL_FETCHING_MEDIA_ITEMS, OPEN_MEDIA_ITEMS_LIST, START_FETCHING_MEDIA_ITEMS } from 'app/redux/actions/media-item/const';
import { CompleteFetchingMediaItemsAction, OpenMediaItemsListAction } from 'app/redux/actions/media-item/types';
import { MediaItemsListState } from 'app/redux/state/media-item';
import { Action } from 'redux';

/**
 * The initial state for the media items list
 */
const initialState: MediaItemsListState = {
	category: undefined,
	mediaItems: [],
	isFetching: false,
	isDeleting: false,
	requiresReload: false,
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
	
		case OPEN_MEDIA_ITEMS_LIST: {

			const openMediaItemsListAction = action as OpenMediaItemsListAction;

			return {
				...initialState,
				category: openMediaItemsListAction.category
			};
		}

		case START_FETCHING_MEDIA_ITEMS: {

			return {
				...state,
				isFetching: true,
				requiresReload: false
			};
		}
	
		case COMPLETE_FETCHING_MEDIA_ITEMS: {

			const receiveMediaItemsAction = action as CompleteFetchingMediaItemsAction;
			
			return {
				...state,
				isFetching: false,
				mediaItems: receiveMediaItemsAction.mediaItems
			};
		}

		case FAIL_FETCHING_MEDIA_ITEMS: {

			return {
				...state,
				isFetching: false,
				mediaItems: []
			};
		}

		default:
			return state;
	}
};
