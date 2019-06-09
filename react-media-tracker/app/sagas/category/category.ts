import { call, put, takeEvery } from '@redux-saga/core/effects';
import { FETCH_CATEGORIES, receiveCategories, requestCategories } from 'app/actions/category';
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
