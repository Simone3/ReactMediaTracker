import { all, call } from '@redux-saga/core/effects';
import { watchDeleteCategorySaga } from 'app/redux/sagas/category/delete';
import { watchFetchCategoriesSaga } from 'app/redux/sagas/category/fetch';
import { watchSaveCategorySaga } from 'app/redux/sagas/category/save';
import { watchFetchMediaItemsSaga } from 'app/redux/sagas/media-item/fetch';
import { SagaIterator } from 'redux-saga';

/**
 * The root saga to be fed to the ReduxSaga middleware
 */
export const rootSaga = function * (): SagaIterator {
	yield all([
		call(watchFetchCategoriesSaga),
		call(watchSaveCategorySaga),
		call(watchDeleteCategorySaga),
		call(watchFetchMediaItemsSaga)
	]);
};
