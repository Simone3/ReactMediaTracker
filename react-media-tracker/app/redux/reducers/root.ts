import { State } from 'app/data/models/internal/state/state';
import { categoryDetails } from 'app/redux/reducers/category/details';
import { categoriesList } from 'app/redux/reducers/category/list';
import { error } from 'app/redux/reducers/error';
import { Action, combineReducers } from 'redux';

/**
 * The combined root reducer
 */
export const rootReducer = combineReducers<State, Action>({
	error,
	categoriesList,
	categoryDetails
});
