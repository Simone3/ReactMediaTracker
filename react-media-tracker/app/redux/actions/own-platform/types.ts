import { OwnPlatformInternal } from 'app/data/models/internal/own-platform';
import { Action } from 'redux';

/**
 * The fetch own platforms action
 */
export type FetchOwnPlatformsAction = Action & {
	
};

/**
 * The start fetching own platforms action
 */
export type StartFetchingOwnPlatformsAction = Action & {
	
};

/**
 * The complete fetching own platforms action
 */
export type CompleteFetchingOwnPlatformsAction = Action & {
	
	ownPlatforms: OwnPlatformInternal[];
};

/**
 * The fail fetching own platforms action
 */
export type FailFetchingOwnPlatformsAction = Action & {
	
};

/**
 * The invalidate own platforms action
 */
export type InvalidateOwnPlatformsAction = Action & {
	
};

/**
 * The load new own platform action
 */
export type LoadNewOwnPlatformDetailsAction = Action & {
	
};

/**
 * The load existing own platform action
 */
export type LoadOwnPlatformDetailsAction = Action & {
	
	ownPlatform: OwnPlatformInternal;
};

/**
 * The set own platform form status action
 */
export type SetOwnPlatformFormStatusAction = Action & {
	
	valid: boolean;
	dirty: boolean;
};

/**
 * The request own platform save action
 */
export type RequestOwnPlatformSaveAction = Action & {
	
};

/**
 * The save own platform action
 */
export type SaveOwnPlatformAction = Action & {
	
	ownPlatform: OwnPlatformInternal;
};

/**
 * The start saving own platform action
 */
export type StartSavingOwnPlatformAction = Action & {
	
	ownPlatform: OwnPlatformInternal;
};

/**
 * The complete saving own platform action
 */
export type CompleteSavingOwnPlatformAction = Action & {
	
	ownPlatform: OwnPlatformInternal;
};

/**
 * The fail saving own platform action
 */
export type FailSavingOwnPlatformAction = Action & {
	
};

/**
 * The delete own platform action
 */
export type DeleteOwnPlatformAction = Action & {
	
	ownPlatform: OwnPlatformInternal;
};

/**
 * The start deleting own platform action
 */
export type StartDeletingOwnPlatformAction = Action & {
	
};

/**
 * The complete deleting own platform action
 */
export type CompleteDeletingOwnPlatformAction = Action & {
	
	ownPlatformId: string;
};

/**
 * The fail deleting own platform action
 */
export type FailDeletingOwnPlatformAction = Action & {
	
};
