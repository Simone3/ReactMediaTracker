import { delay, put, takeEvery } from '@redux-saga/core/effects';
import { FETCH_CATEGORIES, receiveCategories, requestCategories } from 'app/actions/category';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that fetches the categories
 */
const fetchCategoriesSaga = function * (): SagaIterator {

	yield put(requestCategories());

	yield delay(2000);

	yield put(receiveCategories([{
		id: '1',
		name: `MockCat-${Math.floor(Math.random() * 100000)}`,
		mediaType: 'MOVIE',
		color: '#0000ff'
	}, {
		id: '2',
		name: `MockCat-${Math.floor(Math.random() * 100000)}`,
		mediaType: 'BOOK',
		color: '#00ff00'
	}]));
};

/**
 * Watcher saga that reacts to the fetch categories actions
 */
export const watchFetchCategoriesSaga = function * (): SagaIterator {

	yield takeEvery(FETCH_CATEGORIES, fetchCategoriesSaga);
};
