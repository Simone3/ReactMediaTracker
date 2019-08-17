import { GroupInternal } from 'app/data/models/internal/group';
import { COMPLETE_DELETING_GROUP, COMPLETE_FETCHING_GROUPS, COMPLETE_SAVING_GROUP, DELETE_GROUP, FAIL_DELETING_GROUP, FAIL_FETCHING_GROUPS, FAIL_SAVING_GROUP, FETCH_GROUPS, INVALIDATE_GROUPS, SAVE_GROUP, START_DELETING_GROUP, START_FETCHING_GROUPS, START_SAVING_GROUP } from './const';
import { CompleteDeletingGroupAction, CompleteFetchingGroupsAction, CompleteSavingGroupAction, DeleteGroupAction, FailDeletingGroupAction, FailFetchingGroupsAction, FailSavingGroupAction, FetchGroupsAction, InvalidateGroupsAction, SaveGroupAction, StartDeletingGroupAction, StartFetchingGroupsAction, StartSavingGroupAction } from './types';

/**
 * Generator for the fetch groups list action, which causes the request groups action, the async groups fetch and then the receive groups action
 * @returns the action
 */
export const fetchGroups = (): FetchGroupsAction => {
	
	return {
		type: FETCH_GROUPS
	};
};

/**
 * Generator for the start fetching groups action, which marks the start of the groups list fetching operation
 * @returns the action
 */
export const startFetchingGroups = (): StartFetchingGroupsAction => {
	
	return {
		type: START_FETCHING_GROUPS
	};
};

/**
 * Generator for the complete fetching groups action, which marks the successful end of the groups list fetching operation
 * @param groups the fetched groups, possibly an empty array
 * @returns the action
 */
export const completeFetchingGroups = (groups: GroupInternal[]): CompleteFetchingGroupsAction => {
	
	return {
		type: COMPLETE_FETCHING_GROUPS,
		groups: groups
	};
};

/**
 * Generator for the fail fetching groups action, which marks the unsuccessful end of the groups list fetching operation
 * @returns the action
 */
export const failFetchingGroups = (): FailFetchingGroupsAction => {
	
	return {
		type: FAIL_FETCHING_GROUPS
	};
};

/**
 * Generator for the invalidate groups action, which marks the groups list as invalid, i.e. they require a reload
 * @returns the action
 */
export const invalidateGroups = (): InvalidateGroupsAction => {

	return {
		type: INVALIDATE_GROUPS
	};
};

/**
 * Generator for the save group action, which causes the start saving group action, the async group store and then the complete saving group action
 * @param group the group data
 * @returns the action
 */
export const saveGroup = (group: GroupInternal): SaveGroupAction => {
	
	return {
		type: SAVE_GROUP,
		group: group
	};
};

/**
 * Generator for the start saving group action, which marks the start of the group saving operation
 * @param group the group data
 * @returns the action
 */
export const startSavingGroup = (group: GroupInternal): StartSavingGroupAction => {
	
	return {
		type: START_SAVING_GROUP,
		group: group
	};
};

/**
 * Generator for the complete saving group action, which marks the successful end of the group saving operation
 * @returns the action
 */
export const completeSavingGroup = (): CompleteSavingGroupAction => {
	
	return {
		type: COMPLETE_SAVING_GROUP
	};
};

/**
 * Generator for the complete saving group action, which marks the unsuccessful end of the group saving operation
 * @returns the action
 */
export const failSavingGroup = (): FailSavingGroupAction => {
	
	return {
		type: FAIL_SAVING_GROUP
	};
};

/**
 * Generator for the delete group action, which causes the start deleting group action, the async group removal and then the complete deleting group action
 * @param group the group data
 * @returns the action
 */
export const deleteGroup = (group: GroupInternal): DeleteGroupAction => {
	
	return {
		type: DELETE_GROUP,
		group: group
	};
};

/**
 * Generator for the start deleting group action, which marks the start of the group deleting operation
 * @returns the action
 */
export const startDeletingGroup = (): StartDeletingGroupAction => {
	
	return {
		type: START_DELETING_GROUP
	};
};

/**
 * Generator for the complete deleting group action, which marks the successful end of the group deleting operation
 * @returns the action
 */
export const completeDeletingGroup = (): CompleteDeletingGroupAction => {
	
	return {
		type: COMPLETE_DELETING_GROUP
	};
};

/**
 * Generator for the fail deleting group action, which marks the unsuccessful end of the group deleting operation
 * @returns the action
 */
export const failDeletingGroup = (): FailDeletingGroupAction => {
	
	return {
		type: FAIL_DELETING_GROUP
	};
};
