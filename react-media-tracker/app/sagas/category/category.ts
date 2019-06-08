import { call, put, takeEvery } from '@redux-saga/core/effects';
import { FETCH_CATEGORIES, receiveCategories, requestCategories } from 'app/actions/category';
import { config } from 'app/config/config';
import { restJsonInvoker } from 'app/controllers/back-end/rest-json-invoker';
import { GetAllCategoriesResponse } from 'app/models/api/category';
import { CategoryInternal } from 'app/models/internal/category';
import { miscUtils } from 'app/utilities/misc-utils';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that fetches the categories
 */
const fetchCategoriesSaga = function * (): SagaIterator {

	yield put(requestCategories());

	// TODO Move this to a controller
	const getCategoriesResponse: GetAllCategoriesResponse = yield call(restJsonInvoker.invoke, {
		method: 'GET',
		url: miscUtils.buildUrl([ config.backEnd.baseUrl, config.backEnd.categories.getAll ], {
			userId: config.tempToDelete.userId
		}),
		responseBodyClass: GetAllCategoriesResponse
	});

	// TODO Move this to a mapper
	const categories: CategoryInternal[] = [];
	for(const cat of getCategoriesResponse.categories) {
		categories.push({
			id: cat.uid,
			color: cat.color,
			mediaType: cat.mediaType,
			name: cat.name
		});
	}

	yield put(receiveCategories(categories));
};

/**
 * Watcher saga that reacts to the fetch categories actions
 */
export const watchFetchCategoriesSaga = function * (): SagaIterator {

	yield takeEvery(FETCH_CATEGORIES, fetchCategoriesSaga);
};
