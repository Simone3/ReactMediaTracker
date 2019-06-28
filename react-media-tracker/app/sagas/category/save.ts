import { call, put, takeEvery } from '@redux-saga/core/effects';
import { SAVE_CATEGORY } from 'app/actions/category/const';
import { completeSavingCategory, startSavingCategory } from 'app/actions/category/generators';
import { SaveCategoryAction } from 'app/actions/category/types';
import { categoryController } from 'app/controllers/entities/category';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that saves a category
 * @param action the intercepted action
 */
const saveCategorySaga = function * (action: SaveCategoryAction): SagaIterator {

	yield put(startSavingCategory(action.category));

	yield call(categoryController.saveCategory, action.category);
	
	yield put(completeSavingCategory());
};

/**
 * Watcher saga that reacts to the save category actions
 */
export const watchSaveCategorySaga = function * (): SagaIterator {

	yield takeEvery(SAVE_CATEGORY, saveCategorySaga);
};
