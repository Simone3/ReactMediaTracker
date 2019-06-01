import { all, call } from '@redux-saga/core/effects';
import { watchFetchCategoriesSaga } from 'app/sagas/category/category';
import { SagaIterator } from 'redux-saga';

/**
 * The root saga to be fed to the ReduxSaga middleware
 */
export const rootSaga = function * (): SagaIterator {
	yield all([
		call(watchFetchCategoriesSaga)
	]);
};
