import { call, put, takeEvery } from '@redux-saga/core/effects';
import { SAVE_CATEGORY } from 'app/actions/category/const';
import { completeSavingCategory, failSavingCategory, startSavingCategory } from 'app/actions/category/generators';
import { SaveCategoryAction } from 'app/actions/category/types';
import { setError } from 'app/actions/error/generators';
import { categoryController } from 'app/controllers/entities/category';
import { AppError } from 'app/models/internal/error';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that saves a category
 * @param action the intercepted action
 */
const saveCategorySaga = function * (action: SaveCategoryAction): SagaIterator {

	yield put(startSavingCategory(action.category));

	try {

		yield call(categoryController.saveCategory, action.category);
		
		yield put(completeSavingCategory());
	}
	catch(error) {

		yield put(failSavingCategory());
		
		yield put(setError(AppError.BACKEND_CATEGORY_SAVE.withDetails(error)));
	}
};

/**
 * Watcher saga that reacts to the save category actions
 */
export const watchSaveCategorySaga = function * (): SagaIterator {

	yield takeEvery(SAVE_CATEGORY, saveCategorySaga);
};
