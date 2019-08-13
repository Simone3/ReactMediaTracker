import { COMPLETE_DELETING_CATEGORY, COMPLETE_FETCHING_CATEGORIES, COMPLETE_SAVING_CATEGORY, FAIL_DELETING_CATEGORY, FAIL_FETCHING_CATEGORIES, HIGHLIGHT_CATEGORY, INVALIDATE_CATEGORIES, REMOVE_CATEGORY_HIGHTLIGHT, START_DELETING_CATEGORY, START_FETCHING_CATEGORIES } from 'app/redux/actions/category/const';
import { CompleteFetchingCategoriesAction, HighlightCategoryAction } from 'app/redux/actions/category/types';
import { CategoriesListState } from 'app/redux/state/category';
import { Action } from 'redux';

/**
 * The initial state for the categories list
 */
const initialState: CategoriesListState = {
	categories: [],
	status: 'IDLE',
	highlightedCategory: undefined
};

/**
 * Reducer for the categories list portion of the global state
 * @param state previous state
 * @param action an action
 * @returns the new state
 */
export const categoriesList = (state: CategoriesListState = initialState, action: Action): CategoriesListState => {
	
	switch(action.type) {

		case START_FETCHING_CATEGORIES: {

			return {
				...state,
				status: 'FETCHING'
			};
		}
	
		case COMPLETE_FETCHING_CATEGORIES: {

			const receiveCategoriesAction = action as CompleteFetchingCategoriesAction;
			
			return {
				...state,
				status: 'IDLE',
				categories: receiveCategoriesAction.categories
			};
		}

		case FAIL_FETCHING_CATEGORIES: {

			return {
				...state,
				status: 'IDLE',
				categories: []
			};
		}

		case INVALIDATE_CATEGORIES:
		case COMPLETE_SAVING_CATEGORY: {
		
			return {
				...state,
				status: 'REQUIRES_RELOAD'
			};
		}

		case START_DELETING_CATEGORY: {

			return {
				...state,
				status: 'DELETING'
			};
		}

		case COMPLETE_DELETING_CATEGORY: {
		
			return {
				...state,
				status: 'REQUIRES_RELOAD'
			};
		}

		case FAIL_DELETING_CATEGORY: {
		
			return {
				...state,
				status: 'IDLE'
			};
		}

		case HIGHLIGHT_CATEGORY: {

			const highlightCategoryAction = action as HighlightCategoryAction;

			return {
				...state,
				highlightedCategory: highlightCategoryAction.category
			};
		}

		case REMOVE_CATEGORY_HIGHTLIGHT: {

			return {
				...state,
				highlightedCategory: undefined
			};
		}

		default:
			return state;
	}
};
