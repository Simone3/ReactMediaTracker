import { GroupInternal } from 'app/data/models/internal/group';
import { Action } from 'redux';

/**
 * The fetch groups action
 */
export type FetchGroupsAction = Action & {
	
};

/**
 * The start fetching groups action
 */
export type StartFetchingGroupsAction = Action & {
	
};

/**
 * The complete fetching groups action
 */
export type CompleteFetchingGroupsAction = Action & {
	
	groups: GroupInternal[];
};

/**
 * The fail fetching groups action
 */
export type FailFetchingGroupsAction = Action & {
	
};

/**
 * The invalidate groups action
 */
export type InvalidateGroupsAction = Action & {
	
};

/**
 * The save group action
 */
export type SaveGroupAction = Action & {
	
	group: GroupInternal;
};

/**
 * The start saving group action
 */
export type StartSavingGroupAction = Action & {
	
	group: GroupInternal;
};

/**
 * The complete saving group action
 */
export type CompleteSavingGroupAction = Action & {
	
};

/**
 * The fail saving group action
 */
export type FailSavingGroupAction = Action & {
	
};

/**
 * The delete group action
 */
export type DeleteGroupAction = Action & {
	
	group: GroupInternal;
};

/**
 * The start deleting group action
 */
export type StartDeletingGroupAction = Action & {
	
};

/**
 * The complete deleting group action
 */
export type CompleteDeletingGroupAction = Action & {
	
};

/**
 * The fail deleting group action
 */
export type FailDeletingGroupAction = Action & {
	
};
