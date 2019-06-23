import { COMPLETE_SAVING_CATEGORY, LoadCategoryAction, LOAD_CATEGORY, LOAD_NEW_CATEGORY, StartSavingCategoryAction, START_SAVING_CATEGORY } from 'app/actions/category';
import { CategoryDetailsState } from 'app/models/internal/category';
import { Action } from 'redux';

/**
 * The initial state for the category details
 */
const initialCategoryDetails: CategoryDetailsState = {
	category: {
		id: '',
		name: '',
		color: '',
		mediaType: 'BOOK'
	},
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

		case LOAD_NEW_CATEGORY: {

			return {
				...initialCategoryDetails
			};
		}
	
		case LOAD_CATEGORY: {

			const loadCategoryAction = action as LoadCategoryAction;
			
			return {
				...state,
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
				saveCompleted: true
			};
		}

		default:
			return state;
	}
};
