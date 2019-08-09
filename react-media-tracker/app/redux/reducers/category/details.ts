import { DEFAULT_CATEGORY } from 'app/data/models/internal/entities/category';
import { CategoryDetailsState } from 'app/data/models/internal/state/category';
import { COMPLETE_SAVING_CATEGORY, FAIL_SAVING_CATEGORY, LOAD_CATEGORY_DETAILS, LOAD_NEW_CATEGORY_DETAILS, REQUEST_CATEGORY_SAVE, SET_CATEGORY_FORM_STATUS, START_SAVING_CATEGORY } from 'app/redux/actions/category/const';
import { LoadCategoryAction, SetCategoryFormStatusAction, StartSavingCategoryAction } from 'app/redux/actions/category/types';
import { Action } from 'redux';

/**
 * The initial state for the category details
 */
const initialCategoryDetails: CategoryDetailsState = {
	category: undefined,
	valid: false,
	dirty: false,
	saveStatus: 'IDLE'
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
				saveStatus: 'IDLE',
				category: DEFAULT_CATEGORY
			};
		}
	
		case LOAD_CATEGORY_DETAILS: {

			const loadCategoryAction = action as LoadCategoryAction;
			
			return {
				...state,
				saveStatus: 'IDLE',
				category: loadCategoryAction.category
			};
		}
	
		case SET_CATEGORY_FORM_STATUS: {

			const setCategoryFormStatusAction = action as SetCategoryFormStatusAction;
			
			return {
				...state,
				valid: setCategoryFormStatusAction.valid,
				dirty: setCategoryFormStatusAction.dirty
			};
		}

		case REQUEST_CATEGORY_SAVE: {

			return {
				...state,
				saveStatus: 'REQUESTED'
			};
		}
	
		case START_SAVING_CATEGORY: {

			const startSavingCategoryAction = action as StartSavingCategoryAction;

			return {
				...state,
				category: startSavingCategoryAction.category,
				saveStatus: 'SAVING'
			};
		}
	
		case COMPLETE_SAVING_CATEGORY: {

			return {
				...state,
				saveStatus: 'SAVED',
				category: undefined
			};
		}
	
		case FAIL_SAVING_CATEGORY: {

			return {
				...state,
				saveStatus: 'IDLE'
			};
		}

		default:
			return state;
	}
};
