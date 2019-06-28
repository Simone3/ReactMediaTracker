import { all, call } from '@redux-saga/core/effects';
import { watchDeleteCategorySaga } from 'app/sagas/category/delete';
import { watchFetchCategoriesSaga } from 'app/sagas/category/fetch';
import { watchSaveCategorySaga } from 'app/sagas/category/save';
import { SagaIterator } from 'redux-saga';

/**
 * The root saga to be fed to the ReduxSaga middleware
 */
export const rootSaga = function * (): SagaIterator {
	yield all([
		call(watchFetchCategoriesSaga),
		call(watchSaveCategorySaga),
		call(watchDeleteCategorySaga)
	]);
};
