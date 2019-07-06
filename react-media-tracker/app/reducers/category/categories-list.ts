import { COMPLETE_DELETING_CATEGORY, COMPLETE_FETCHING_CATEGORIES, COMPLETE_SAVING_CATEGORY, FAIL_DELETING_CATEGORY, FAIL_FETCHING_CATEGORIES, INVALIDATE_CATEGORIES, START_DELETING_CATEGORY, START_FETCHING_CATEGORIES } from 'app/actions/category/const';
import { CompleteFetchingCategoriesAction } from 'app/actions/category/types';
import { CategoriesListState } from 'app/models/internal/state/category';
import { Action } from 'redux';

/**
 * The initial state for the categories list
 */
const initialCategories: CategoriesListState = {
	categories: [],
	isFetching: false,
	isDeleting: false,
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

		case START_FETCHING_CATEGORIES: {

			return {
				...state,
				isFetching: true,
				requiresReload: false
			};
		}
	
		case COMPLETE_FETCHING_CATEGORIES: {

			const receiveCategoriesAction = action as CompleteFetchingCategoriesAction;
			
			return {
				...state,
				isFetching: false,
				categories: receiveCategoriesAction.categories
			};
		}

		case FAIL_FETCHING_CATEGORIES: {

			return {
				...state,
				isFetching: false,
				categories: []
			};
		}

		case INVALIDATE_CATEGORIES:
		case COMPLETE_SAVING_CATEGORY: {
		
			return {
				...state,
				requiresReload: true
			};
		}

		case START_DELETING_CATEGORY: {

			return {
				...state,
				isDeleting: true
			};
		}

		case COMPLETE_DELETING_CATEGORY: {
		
			return {
				...state,
				isDeleting: false,
				requiresReload: true
			};
		}

		case FAIL_DELETING_CATEGORY: {
		
			return {
				...state,
				isDeleting: false
			};
		}

		default:
			return state;
	}
};
