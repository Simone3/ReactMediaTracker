import { State } from 'app/models/internal/state';
import { categoriesList } from 'app/reducers/categories-list';
import { categoryDetails } from 'app/reducers/category-details';
import { Action, combineReducers } from 'redux';

/**
 * The combined root reducer
 */
export const rootReducer = combineReducers<State, Action>({
	categoriesList,
	categoryDetails
});
