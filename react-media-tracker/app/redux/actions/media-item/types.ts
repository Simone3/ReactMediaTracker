import { CategoryInternal } from 'app/data/models/internal/entities/category';
import { MediaItemInternal } from 'app/data/models/internal/entities/media-items/media-item';
import { Action } from 'redux';

/**
 * The open media items list action
 */
export type OpenMediaItemsListAction = Action & {
	
	category: CategoryInternal;
};

/**
 * The fetch media items action
 */
export type FetchMediaItemsAction = Action & {
	
};

/**
 * The start fetching media items action
 */
export type StartFetchingMediaItemsAction = Action & {
	
};

/**
 * The complete fetching media items action
 */
export type CompleteFetchingMediaItemsAction = Action & {
	
	mediaItems: MediaItemInternal[];
};

/**
 * The fail fetching media items action
 */
export type FailFetchingMediaItemsAction = Action & {
	
};
