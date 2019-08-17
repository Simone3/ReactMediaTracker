import { MediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { Action } from 'redux';

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

/**
 * The mark media item as active action
 */
export type MarkMediaItemAsActiveAction = Action & {
	
	mediaItem: MediaItemInternal;
};

/**
 * The mark media item as complete action
 */
export type MarkMediaItemAsCompleteAction = Action & {
	
	mediaItem: MediaItemInternal;
};

/**
 * The mark media item as redo action
 */
export type MarkMediaItemAsRedoAction = Action & {
	
	mediaItem: MediaItemInternal;
};

/**
 * The start inline updating media item action
 */
export type StartInlineUpdatingMediaItemAction = Action & {
	
};

/**
 * The complete inline updating media item action
 */
export type CompleteInlineUpdatingMediaItemAction = Action & {
	
};

/**
 * The fail inline updating media item action
 */
export type FailInlineUpdatingMediaItemAction = Action & {
	
};

/**
 * The delete media item action
 */
export type DeleteMediaItemAction = Action & {
	
	mediaItem: MediaItemInternal;
};

/**
 * The start deleting media item action
 */
export type StartDeletingMediaItemAction = Action & {
	
};

/**
 * The complete deleting media item action
 */
export type CompleteDeletingMediaItemAction = Action & {
	
};

/**
 * The fail deleting media item action
 */
export type FailDeletingMediaItemAction = Action & {
	
};

/**
 * The highlight media item action
 */
export type HighlightMediaItemAction = Action & {
	
	mediaItem: MediaItemInternal;
};

/**
 * The remove media item highlight action
 */
export type RemoveMediaItemHighlightAction = Action & {
	
};

/**
 * The search media items action
 */
export type SearchMediaItemsAction = Action & {
	
	term: string;
};

/**
 * The start search media items mode action
 */
export type StartMediaItemsSearchModeAction = Action & {
	
};

/**
 * The stop search media items mode action
 */
export type StopMediaItemsSearchModeAction = Action & {
	
};
