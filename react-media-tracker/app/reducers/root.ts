import { State } from 'app/models/internal/state';
import { categoryDetails } from 'app/reducers/category-details';
import { categories } from 'app/reducers/category-list';
import { Action, combineReducers } from 'redux';

/**
 * The combined root reducer
 */
export const rootReducer = combineReducers<State, Action>({
	categories,
	categoryDetails
});
