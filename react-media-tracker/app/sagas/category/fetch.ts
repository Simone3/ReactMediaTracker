import { call, put, takeEvery } from '@redux-saga/core/effects';
import { FETCH_CATEGORIES } from 'app/actions/category/const';
import { completeFetchingCategories, startFetchingCategories } from 'app/actions/category/generators';
import { categoryController } from 'app/controllers/entities/category';
import { CategoryInternal } from 'app/models/internal/category';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that fetches the categories
 */
const fetchCategoriesSaga = function * (): SagaIterator {

	yield put(startFetchingCategories());

	const categories: CategoryInternal[] = yield call(categoryController.getAllCategories);
	
	yield put(completeFetchingCategories(categories));
};

/**
 * Watcher saga that reacts to the fetch categories actions
 */
export const watchFetchCategoriesSaga = function * (): SagaIterator {

	yield takeEvery(FETCH_CATEGORIES, fetchCategoriesSaga);
};
