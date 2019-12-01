import { COMPLETE_LOGGING_USER_OUT } from 'app/redux/actions/user/const';
import { categoryDetails } from 'app/redux/reducers/category/details';
import { categoryGlobal } from 'app/redux/reducers/category/global';
import { categoriesList } from 'app/redux/reducers/category/list';
import { error } from 'app/redux/reducers/error';
import { groupDetails } from 'app/redux/reducers/group/details';
import { groupsList } from 'app/redux/reducers/group/list';
import { mediaItemDetails } from 'app/redux/reducers/media-item/details';
import { mediaItemsList } from 'app/redux/reducers/media-item/list';
import { ownPlatformDetails } from 'app/redux/reducers/own-platform/details';
import { ownPlatformsList } from 'app/redux/reducers/own-platform/list';
import { userGlobal } from 'app/redux/reducers/user/global';
import { userOperations } from 'app/redux/reducers/user/operations';
import { State } from 'app/redux/state/state';
import { Action, combineReducers } from 'redux';

/**
 * Combination of all app reducers
 */
export const allReduces = combineReducers<State, Action>({
	error,
	userGlobal,
	userOperations,
	categoryGlobal,
	categoriesList,
	categoryDetails,
	mediaItemsList,
	mediaItemDetails,
	groupsList,
	groupDetails,
	ownPlatformsList,
	ownPlatformDetails
});

/**
 * The application root reducer
 * @param state previous state
 * @param action an action
 * @returns the new state
 */
export const rootReducer = (state: State | undefined, action: Action): State => {

	// When the user logs out, the whole state is reset (child reducers all set their initial state)
	if(action.type === COMPLETE_LOGGING_USER_OUT) {

		state = undefined;
	}

	return allReduces(state, action);
};
