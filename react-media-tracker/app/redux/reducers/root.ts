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
import { State } from 'app/redux/state/state';
import { Action, combineReducers } from 'redux';

/**
 * The combined root reducer
 */
export const rootReducer = combineReducers<State, Action>({
	error,
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
