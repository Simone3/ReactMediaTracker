import { INVALIDATE_CATEGORIES, ReceiveCategoriesAction, RECEIVE_CATEGORIES, REQUEST_CATEGORIES } from 'app/actions/category';
import { CategoriesListState } from 'app/models/internal/category';
import { Action } from 'redux';

/**
 * The initial state for the categories list
 */
const initialCategories: CategoriesListState = {
	items: [],
	isFetching: false,
	requiresReload: false
};

/**
 * Reducer for the categories list portion of the global state
 * @param state previous state
 * @param action an action
 * @returns the new state
 */
export const categories = (state: CategoriesListState = initialCategories, action: Action): CategoriesListState => {
	
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
				items: receiveCategoriesAction.categories
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
