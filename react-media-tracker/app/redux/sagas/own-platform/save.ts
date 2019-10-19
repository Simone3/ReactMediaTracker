import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { ownPlatformController } from 'app/data/controllers/core/entities/own-platform';
import { AppError } from 'app/data/models/internal/error';
import { setError } from 'app/redux/actions/error/generators';
import { SAVE_OWN_PLATFORM } from 'app/redux/actions/own-platform/const';
import { completeSavingOwnPlatform, failSavingOwnPlatform, startSavingOwnPlatform } from 'app/redux/actions/own-platform/generators';
import { SaveOwnPlatformAction } from 'app/redux/actions/own-platform/types';
import { State } from 'app/redux/state/state';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that saves a own platform
 * @param action the intercepted action
 */
const saveOwnPlatformSaga = function * (action: SaveOwnPlatformAction): SagaIterator {

	yield put(startSavingOwnPlatform(action.ownPlatform));

	try {

		// Get values from state
		const state: State = yield select();
		const category = state.categoryGlobal.selectedCategory;
		if(!category) {

			throw AppError.GENERIC.withDetails('Something went wrong during state initialization: cannot find values while saving own platform');
		}

		// Save the own platform
		yield call(ownPlatformController.saveOwnPlatform.bind(ownPlatformController), category.id, action.ownPlatform);
		yield put(completeSavingOwnPlatform(action.ownPlatform));
	}
	catch(error) {

		yield put(failSavingOwnPlatform());
		
		yield put(setError(AppError.BACKEND_OWN_PLATFORM_SAVE.withDetails(error)));
	}
};

/**
 * Watcher saga that reacts to the save own platform actions
 */
export const watchSaveOwnPlatformSaga = function * (): SagaIterator {

	yield takeLatest(SAVE_OWN_PLATFORM, saveOwnPlatformSaga);
};
