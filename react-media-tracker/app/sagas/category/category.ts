import { call, put, takeEvery } from '@redux-saga/core/effects';
import { FETCH_CATEGORIES, SAVE_CATEGORY } from 'app/actions/category/const';
import { completeSavingCategory, receiveCategories, requestCategories, startSavingCategory } from 'app/actions/category/generators';
import { SaveCategoryAction } from 'app/actions/category/types';
import { config } from 'app/config/config';
import { categoryController } from 'app/controllers/entities/category';
import { CategoryInternal } from 'app/models/internal/category';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that fetches the categories
 */
const fetchCategoriesSaga = function * (): SagaIterator {

	yield put(requestCategories());

	const categories: CategoryInternal[] = yield call(categoryController.getAllCategories, config.tempToDelete.userId);
	
	yield put(receiveCategories(categories));
};

/**
 * Watcher saga that reacts to the fetch categories actions
 */
export const watchFetchCategoriesSaga = function * (): SagaIterator {

	yield takeEvery(FETCH_CATEGORIES, fetchCategoriesSaga);
};

/**
 * Worker saga that saves a category
 * @param action the intercepted action
 */
const saveCategorySaga = function * (action: SaveCategoryAction): SagaIterator {

	yield put(startSavingCategory(action.category));

	yield call(categoryController.saveCategory, config.tempToDelete.userId, action.category);
	
	yield put(completeSavingCategory());
};

/**
 * Watcher saga that reacts to the save category actions
 */
export const watchSaveCategorySaga = function * (): SagaIterator {

	yield takeEvery(SAVE_CATEGORY, saveCategorySaga);
};
