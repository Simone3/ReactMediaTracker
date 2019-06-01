import { State } from 'app/models/internal/state';
import { categories } from 'app/reducers/category';
import { Action, combineReducers } from 'redux';

/**
 * The combined root reducer
 */
export const rootReducer = combineReducers<State, Action>({
	categories
});
