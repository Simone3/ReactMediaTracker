import { CategoryInternal } from 'app/data/models/internal/category';
import { MediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { COMPLETE_FETCHING_MEDIA_ITEMS, FAIL_FETCHING_MEDIA_ITEMS, FETCH_MEDIA_ITEMS, START_FETCHING_MEDIA_ITEMS } from './const';
import { CompleteFetchingMediaItemsAction, FailFetchingMediaItemsAction, FetchMediaItemsAction, OpenMediaItemsListAction, StartFetchingMediaItemsAction } from './types';

/**
 * Generator for the open media items list action, which sets the category linked with the list
 * @param category the linked category
 * @returns the action
 */
export const openMediaItemsList = (category: CategoryInternal): OpenMediaItemsListAction => {
	
	return {
		type: FETCH_MEDIA_ITEMS,
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
