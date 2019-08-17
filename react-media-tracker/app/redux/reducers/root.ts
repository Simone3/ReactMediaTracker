import { categoryDetails } from 'app/redux/reducers/category/details';
import { categoryGlobal } from 'app/redux/reducers/category/global';
import { categoriesList } from 'app/redux/reducers/category/list';
import { error } from 'app/redux/reducers/error';
import { groupsList } from 'app/redux/reducers/group/list';
import { mediaItemsList } from 'app/redux/reducers/media-item/list';
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
	groupsList
});
