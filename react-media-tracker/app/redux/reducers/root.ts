import { categoryDetails } from 'app/redux/reducers/category/details';
import { categoriesList } from 'app/redux/reducers/category/list';
import { error } from 'app/redux/reducers/error';
import { mediaItemsList } from 'app/redux/reducers/media-item/list';
import { State } from 'app/redux/state/state';
import { Action, combineReducers } from 'redux';

/**
 * The combined root reducer
 */
export const rootReducer = combineReducers<State, Action>({
	error,
	categoriesList,
	categoryDetails,
	mediaItemsList
});
