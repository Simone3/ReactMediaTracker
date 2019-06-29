import { State } from 'app/models/internal/state';
import { categoriesList } from 'app/reducers/category/categories-list';
import { categoryDetails } from 'app/reducers/category/category-details';
import { error } from 'app/reducers/error';
import { Action, combineReducers } from 'redux';

/**
 * The combined root reducer
 */
export const rootReducer = combineReducers<State, Action>({
	error,
	categoriesList,
	categoryDetails
});
