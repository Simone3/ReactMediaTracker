import { mediaItemDefinitionsControllerFactory } from 'app/factories/controller-factories';
import { COMPLETE_SAVING_MEDIA_ITEM, FAIL_SAVING_MEDIA_ITEM, LOAD_MEDIA_ITEM_DETAILS, LOAD_NEW_MEDIA_ITEM_DETAILS, REQUEST_MEDIA_ITEM_SAVE, SET_MEDIA_ITEM_FORM_STATUS, START_SAVING_MEDIA_ITEM } from 'app/redux/actions/media-item/const';
import { LoadMediaItemDetailsAction, LoadNewMediaItemDetailsAction, SetMediaItemFormStatusAction, StartSavingMediaItemAction } from 'app/redux/actions/media-item/types';
import { MediaItemDetailsState } from 'app/redux/state/media-item';
import { Action } from 'redux';

/**
 * The initial state for the media item details
 */
const initialState: MediaItemDetailsState = {
	mediaItem: undefined,
	valid: false,
	dirty: false,
	saveStatus: 'IDLE'
};

/**
 * Reducer for the media item details portion of the global state
 * @param state previous state
 * @param action an action
 * @returns the new state
 */
export const mediaItemDetails = (state: MediaItemDetailsState = initialState, action: Action): MediaItemDetailsState => {
	
	switch(action.type) {

		// When the details page is started with a new media item, the status is reset and the default media item is loaded
		case LOAD_NEW_MEDIA_ITEM_DETAILS: {

			const loadNewMediaItemAction = action as LoadNewMediaItemDetailsAction;
			const definitionsController = mediaItemDefinitionsControllerFactory.get(loadNewMediaItemAction.category);

			return {
				...state,
				saveStatus: 'IDLE',
				mediaItem: definitionsController.getDefaultMediaItem()
			};
		}
	
		// When the details page is started with an existing media item, the status is reset and the given media item is loaded
		case LOAD_MEDIA_ITEM_DETAILS: {

			const loadMediaItemAction = action as LoadMediaItemDetailsAction;
			
			return {
				...state,
				saveStatus: 'IDLE',
				mediaItem: loadMediaItemAction.mediaItem
			};
		}
	
		// When the form status changes, the corresponding state fields are set
		case SET_MEDIA_ITEM_FORM_STATUS: {

			const setMediaItemFormStatusAction = action as SetMediaItemFormStatusAction;
			
			return {
				...state,
				valid: setMediaItemFormStatusAction.valid,
				dirty: setMediaItemFormStatusAction.dirty
			};
		}

		// When the media item save is requested, the status changes (e.g. allows header save button to notify the form about the request)
		case REQUEST_MEDIA_ITEM_SAVE: {

			return {
				...state,
				saveStatus: 'REQUESTED'
			};
		}
	
		// When the app starts saving a media item, the status changes to show the loading indicator
		case START_SAVING_MEDIA_ITEM: {

			const startSavingMediaItemAction = action as StartSavingMediaItemAction;

			return {
				...state,
				mediaItem: startSavingMediaItemAction.mediaItem,
				saveStatus: 'SAVING'
			};
		}
	
		// When the app completes the save process, the status changes and the media item is reset (at this point a navigation back to the list is expected)
		case COMPLETE_SAVING_MEDIA_ITEM: {

			return {
				...state,
				saveStatus: 'SAVED',
				mediaItem: undefined
			};
		}
	
		// When the app fails to save a media item, the status is reset (an error is shown by the global handler)
		case FAIL_SAVING_MEDIA_ITEM: {

			return {
				...state,
				saveStatus: 'IDLE'
			};
		}

		default:
			return state;
	}
};
