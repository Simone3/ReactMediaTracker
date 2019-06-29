import { CLEAR_ERROR, SET_ERROR } from 'app/actions/error/const';
import { SetErrorAction } from 'app/actions/error/types';
import { AppError, ErrorState } from 'app/models/internal/error';
import { Action } from 'redux';

/**
 * The initial state for the error
 */
const initialErrorState: ErrorState = {
	error: undefined
};

/**
 * Reducer for the error portion of the global state
 * @param state previous state
 * @param action an action
 * @returns the new state
 */
export const error = (state: ErrorState = initialErrorState, action: Action): ErrorState => {
	
	switch(action.type) {

		case SET_ERROR: {

			const setErrorAction = action as SetErrorAction;
			const appError = setErrorAction.error instanceof AppError ? setErrorAction.error : AppError.GENERIC.withDetails(setErrorAction.error);

			return {
				...state,
				error: appError
			};
		}

		case CLEAR_ERROR: {
			
			return {
				...state,
				error: undefined
			};
		}
	
		default:
			return state;
	}
};
