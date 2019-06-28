import { COMPLETE_SAVING_CATEGORY, LOAD_CATEGORY_DETAILS, LOAD_NEW_CATEGORY_DETAILS, START_SAVING_CATEGORY } from 'app/actions/category/const';
import { LoadCategoryAction, StartSavingCategoryAction } from 'app/actions/category/types';
import { CategoryDetailsState, DEFAULT_CATEGORY } from 'app/models/internal/category';
import { Action } from 'redux';

/**
 * The initial state for the category details
 */
const initialCategoryDetails: CategoryDetailsState = {
	category: undefined,
	isSaving: false,
	saveCompleted: false
};

/**
 * Reducer for the category details portion of the global state
 * @param state previous state
 * @param action an action
 * @returns the new state
 */
export const categoryDetails = (state: CategoryDetailsState = initialCategoryDetails, action: Action): CategoryDetailsState => {
	
	switch(action.type) {

		case LOAD_NEW_CATEGORY_DETAILS: {

			return {
				...state,
				saveCompleted: false,
				category: DEFAULT_CATEGORY
			};
		}
	
		case LOAD_CATEGORY_DETAILS: {

			const loadCategoryAction = action as LoadCategoryAction;
			
			return {
				...state,
				saveCompleted: false,
				category: loadCategoryAction.category
			};
		}
	
		case START_SAVING_CATEGORY: {

			const startSavingCategoryAction = action as StartSavingCategoryAction;

			return {
				...state,
				category: startSavingCategoryAction.category,
				isSaving: true
			};
		}
	
		case COMPLETE_SAVING_CATEGORY: {

			return {
				...state,
				isSaving: false,
				saveCompleted: true,
				category: undefined
			};
		}

		default:
			return state;
	}
};
