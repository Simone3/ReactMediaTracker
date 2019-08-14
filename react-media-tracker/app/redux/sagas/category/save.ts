import { call, put, takeLatest } from '@redux-saga/core/effects';
import { categoryController } from 'app/data/controllers/core/entities/category';
import { AppError } from 'app/data/models/internal/error';
import { SAVE_CATEGORY } from 'app/redux/actions/category/const';
import { completeSavingCategory, failSavingCategory, startSavingCategory } from 'app/redux/actions/category/generators';
import { SaveCategoryAction } from 'app/redux/actions/category/types';
import { setError } from 'app/redux/actions/error/generators';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that saves a category
 * @param action the intercepted action
 */
const saveCategorySaga = function * (action: SaveCategoryAction): SagaIterator {

	yield put(startSavingCategory(action.category));

	try {

		yield call(categoryController.saveCategory.bind(categoryController), action.category);
		
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

	yield takeLatest(SAVE_CATEGORY, saveCategorySaga);
};
