import { call, put, takeEvery } from '@redux-saga/core/effects';
import { categoryController } from 'app/data/controllers/core/entities/category';
import { CategoryInternal } from 'app/data/models/internal/category';
import { AppError } from 'app/data/models/internal/error';
import { FETCH_CATEGORIES } from 'app/redux/actions/category/const';
import { completeFetchingCategories, failFetchingCategories, startFetchingCategories } from 'app/redux/actions/category/generators';
import { setError } from 'app/redux/actions/error/generators';
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
