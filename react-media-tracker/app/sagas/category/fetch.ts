import { call, put, takeEvery } from '@redux-saga/core/effects';
import { FETCH_CATEGORIES } from 'app/actions/category/const';
import { completeFetchingCategories, failFetchingCategories, startFetchingCategories } from 'app/actions/category/generators';
import { setError } from 'app/actions/error/generators';
import { categoryController } from 'app/controllers/core/entities/category';
import { CategoryInternal } from 'app/models/internal/entities/category';
import { AppError } from 'app/models/internal/error';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that fetches the categories
 */
const fetchCategoriesSaga = function * (): SagaIterator {

	yield put(startFetchingCategories());

	try {

		const categories: CategoryInternal[] = yield call(categoryController.getAllCategories.bind(categoryController));
		
		yield put(completeFetchingCategories(categories));
	}
	catch(error) {

		yield put(failFetchingCategories());
		
		yield put(setError(AppError.BACKEND_CATEGORY_FETCH.withDetails(error)));
	}
};

/**
 * Watcher saga that reacts to the fetch categories actions
 */
export const watchFetchCategoriesSaga = function * (): SagaIterator {

	yield takeEvery(FETCH_CATEGORIES, fetchCategoriesSaga);
};
