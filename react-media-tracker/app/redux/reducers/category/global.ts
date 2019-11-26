import { SELECT_CATEGORY } from 'app/redux/actions/category/const';
import { SelectCategoryAction } from 'app/redux/actions/category/types';
import { COMPLETE_LOGGING_USER_OUT } from 'app/redux/actions/user/const';
import { CategoryGlobalState } from 'app/redux/state/category';
import { Action } from 'redux';

/**
 * The initial state for the global category data
 */
const initialState: CategoryGlobalState = {
	selectedCategory: undefined
};

/**
 * Reducer for the global category portion of the global state
 * @param state previous state
 * @param action an action
 * @returns the new state
 */
export const categoryGlobal = (state: CategoryGlobalState = initialState, action: Action): CategoryGlobalState => {
	
	switch(action.type) {

		// When a category is selected, it is marked as such
		case SELECT_CATEGORY: {

			const selectCategoryAction = action as SelectCategoryAction;

			const category = selectCategoryAction.category;

			return {
				...initialState,
				selectedCategory: category
			};
		}

		// When the user logs out, everything gets reset
		case COMPLETE_LOGGING_USER_OUT: {

			return {
				...initialState
			};
		}

		default:
			return state;
	}
};
