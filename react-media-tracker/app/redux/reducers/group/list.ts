import { SELECT_CATEGORY } from 'app/redux/actions/category/const';
import { COMPLETE_DELETING_GROUP, COMPLETE_FETCHING_GROUPS, COMPLETE_SAVING_GROUP, FAIL_DELETING_GROUP, FAIL_FETCHING_GROUPS, INVALIDATE_GROUPS, START_DELETING_GROUP, START_FETCHING_GROUPS } from 'app/redux/actions/group/const';
import { CompleteFetchingGroupsAction } from 'app/redux/actions/group/types';
import { COMPLETE_LOGGING_USER_OUT } from 'app/redux/actions/user/const';
import { GroupsListState } from 'app/redux/state/group';
import { Action } from 'redux';

/**
 * The initial state for the groups list
 */
const initialState: GroupsListState = {
	groups: [],
	status: 'REQUIRES_FETCH'
};

/**
 * Reducer for the groups list portion of the global state
 * @param state previous state
 * @param action an action
 * @returns the new state
 */
export const groupsList = (state: GroupsListState = initialState, action: Action): GroupsListState => {
	
	switch(action.type) {

		// When the app starts fetching the list of groups, the status changes to show the loading indicator
		case START_FETCHING_GROUPS: {

			return {
				...state,
				status: 'FETCHING'
			};
		}
	
		// When the app completes the fetching process, the status is reset and the retrieved list is saved
		case COMPLETE_FETCHING_GROUPS: {

			const receiveGroupsAction = action as CompleteFetchingGroupsAction;
			
			return {
				...state,
				status: 'FETCHED',
				groups: receiveGroupsAction.groups
			};
		}

		// When the app fails to fetch the groups, the status is reset and an empty list is loaded (an error is shown by the global handler)
		case FAIL_FETCHING_GROUPS: {

			return {
				...state,
				status: 'FETCHED',
				groups: []
			};
		}

		// When the list is explicitly invalidated or when a new group has been successfully saved, the list is marked for reload
		case INVALIDATE_GROUPS:
		case COMPLETE_SAVING_GROUP: {
		
			return {
				...state,
				status: 'REQUIRES_FETCH'
			};
		}

		// When the app starts deleting a group, the status changes to show the loading indicator
		case START_DELETING_GROUP: {

			return {
				...state,
				status: 'DELETING'
			};
		}

		// When the app completes the delete process, the list is marked for reload
		case COMPLETE_DELETING_GROUP: {
		
			return {
				...state,
				status: 'REQUIRES_FETCH'
			};
		}

		// When the app fails to delete a group, the status is reset (an error is shown by the global handler)
		case FAIL_DELETING_GROUP: {
		
			return {
				...state,
				status: 'FETCHED'
			};
		}

		// When a category is selected, the group data is reset
		case SELECT_CATEGORY: {

			return {
				...initialState
			};
		}

		// When the user logs out, everything gets reset
		case COMPLETE_LOGGING_USER_OUT: {

			return {
				...initialState
			};
		}

		default:
			return state;
	}
};
