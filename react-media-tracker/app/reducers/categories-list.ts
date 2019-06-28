import { INVALIDATE_CATEGORIES, RECEIVE_CATEGORIES, REQUEST_CATEGORIES } from 'app/actions/category/const';
import { ReceiveCategoriesAction } from 'app/actions/category/types';
import { CategoriesListState } from 'app/models/internal/category';
import { Action } from 'redux';

/**
 * The initial state for the categories list
 */
const initialCategories: CategoriesListState = {
	categories: [],
	isFetching: false,
	requiresReload: false
};

/**
 * Reducer for the categories list portion of the global state
 * @param state previous state
 * @param action an action
 * @returns the new state
 */
export const categoriesList = (state: CategoriesListState = initialCategories, action: Action): CategoriesListState => {
	
	switch(action.type) {

		case REQUEST_CATEGORIES: {

			return {
				...state,
				isFetching: true,
				requiresReload: false
			};
		}
	
		case RECEIVE_CATEGORIES: {

			const receiveCategoriesAction = action as ReceiveCategoriesAction;
			
			return {
				...state,
				isFetching: false,
				categories: receiveCategoriesAction.categories
			};
		}

		case INVALIDATE_CATEGORIES: {

			return {
				...state,
				requiresReload: true
			};
		}

		default:
			return state;
	}
};
