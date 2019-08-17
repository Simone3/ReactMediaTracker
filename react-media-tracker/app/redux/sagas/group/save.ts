import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { groupController } from 'app/data/controllers/core/entities/group';
import { AppError } from 'app/data/models/internal/error';
import { setError } from 'app/redux/actions/error/generators';
import { SAVE_GROUP } from 'app/redux/actions/group/const';
import { completeSavingGroup, failSavingGroup, startSavingGroup } from 'app/redux/actions/group/generators';
import { SaveGroupAction } from 'app/redux/actions/group/types';
import { State } from 'app/redux/state/state';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that saves a group
 * @param action the intercepted action
 */
const saveGroupSaga = function * (action: SaveGroupAction): SagaIterator {

	yield put(startSavingGroup(action.group));

	try {

		// Get values from state
		const state: State = yield select();
		const category = state.categoryGlobal.selectedCategory;
		if(!category) {

			throw AppError.GENERIC.withDetails('Something went wrong during state initialization: cannot find values while saving group');
		}

		// Save the group
		yield call(groupController.saveGroup.bind(groupController), category.id, action.group);
		yield put(completeSavingGroup());
	}
	catch(error) {

		yield put(failSavingGroup());
		
		yield put(setError(AppError.BACKEND_GROUP_SAVE.withDetails(error)));
	}
};

/**
 * Watcher saga that reacts to the save group actions
 */
export const watchSaveGroupSaga = function * (): SagaIterator {

	yield takeLatest(SAVE_GROUP, saveGroupSaga);
};
