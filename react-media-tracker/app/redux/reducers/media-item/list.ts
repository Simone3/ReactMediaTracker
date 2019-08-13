import { mediaItemDefinitionsControllerFactory } from 'app/factories/controller-factories';
import { COMPLETE_DELETING_MEDIA_ITEM, COMPLETE_FETCHING_MEDIA_ITEMS, COMPLETE_INLINE_UPDATING_MEDIA_ITEM, FAIL_DELETING_MEDIA_ITEM, FAIL_FETCHING_MEDIA_ITEMS, FAIL_INLINE_UPDATING_MEDIA_ITEM, HIGHLIGHT_MEDIA_ITEM, OPEN_MEDIA_ITEMS_LIST, REMOVE_MEDIA_ITEM_HIGHTLIGHT, START_DELETING_MEDIA_ITEM, START_FETCHING_MEDIA_ITEMS, START_INLINE_UPDATING_MEDIA_ITEM } from 'app/redux/actions/media-item/const';
import { CompleteFetchingMediaItemsAction, HighlightMediaItemAction, OpenMediaItemsListAction } from 'app/redux/actions/media-item/types';
import { MediaItemsListState } from 'app/redux/state/media-item';
import { Action } from 'redux';

/**
 * The initial state for the media items list
 */
const initialState: MediaItemsListState = {
	category: undefined,
	filter: undefined,
	sortBy: undefined,
	mediaItems: [],
	status: 'IDLE',
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

		case START_FETCHING_MEDIA_ITEMS: {

			return {
				...state,
				status: 'FETCHING'
			};
		}
	
		case COMPLETE_FETCHING_MEDIA_ITEMS: {

			const receiveMediaItemsAction = action as CompleteFetchingMediaItemsAction;
			
			return {
				...state,
				status: 'IDLE',
				mediaItems: receiveMediaItemsAction.mediaItems
			};
		}

		case FAIL_FETCHING_MEDIA_ITEMS: {

			return {
				...state,
				status: 'IDLE',
				mediaItems: []
			};
		}

		case START_DELETING_MEDIA_ITEM: {

			return {
				...state,
				status: 'DELETING'
			};
		}

		case COMPLETE_DELETING_MEDIA_ITEM: {
		
			return {
				...state,
				status: 'REQUIRES_RELOAD'
			};
		}

		case FAIL_DELETING_MEDIA_ITEM: {
		
			return {
				...state,
				status: 'IDLE'
			};
		}
		
		case START_INLINE_UPDATING_MEDIA_ITEM: {

			return {
				...state,
				status: 'INLINE_UPDATING'
			};
		}

		case COMPLETE_INLINE_UPDATING_MEDIA_ITEM: {
		
			return {
				...state,
				status: 'REQUIRES_RELOAD'
			};
		}

		case FAIL_INLINE_UPDATING_MEDIA_ITEM: {
		
			return {
				...state,
				status: 'IDLE'
			};
		}
		
		case HIGHLIGHT_MEDIA_ITEM: {

			const highlightMediaItemAction = action as HighlightMediaItemAction;

			return {
				...state,
				highlightedMediaItem: highlightMediaItemAction.mediaItem
			};
		}

		case REMOVE_MEDIA_ITEM_HIGHTLIGHT: {

			return {
				...state,
				highlightedMediaItem: undefined
			};
		}

		default:
			return state;
	}
};
