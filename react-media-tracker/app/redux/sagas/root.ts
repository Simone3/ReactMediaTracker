import { all, call } from '@redux-saga/core/effects';
import { watchDeleteCategorySaga } from 'app/redux/sagas/category/delete';
import { watchFetchCategoriesSaga } from 'app/redux/sagas/category/fetch';
import { watchSaveCategorySaga } from 'app/redux/sagas/category/save';
import { watchDeleteGroupSaga } from 'app/redux/sagas/group/delete';
import { watchFetchGroupsSaga } from 'app/redux/sagas/group/fetch';
import { watchSaveGroupSaga } from 'app/redux/sagas/group/save';
import { watchGetMediaItemCatalogDetailsSaga } from 'app/redux/sagas/media-item/catalog-details';
import { watchSearchMediaItemsCatalogSaga } from 'app/redux/sagas/media-item/catalog-search';
import { watchDeleteMediaItemSaga } from 'app/redux/sagas/media-item/delete';
import { watchFetchMediaItemsSaga } from 'app/redux/sagas/media-item/fetch';
import { watchInlineMediaItemUpdateSaga } from 'app/redux/sagas/media-item/inline-update';
import { watchSaveMediaItemSaga } from 'app/redux/sagas/media-item/save';
import { watchNavigationSaga } from 'app/redux/sagas/navigation/navigation';
import { watchDeleteOwnPlatformSaga } from 'app/redux/sagas/own-platform/delete';
import { watchFetchOwnPlatformsSaga } from 'app/redux/sagas/own-platform/fetch';
import { watchSaveOwnPlatformSaga } from 'app/redux/sagas/own-platform/save';
import { SagaIterator } from 'redux-saga';

/**
 * The root saga to be fed to the ReduxSaga middleware
 */
export const rootSaga = function * (): SagaIterator {
	yield all([

		call(watchNavigationSaga),

		call(watchFetchCategoriesSaga),
		call(watchSaveCategorySaga),
		call(watchDeleteCategorySaga),

		call(watchFetchMediaItemsSaga),
		call(watchDeleteMediaItemSaga),
		call(watchInlineMediaItemUpdateSaga),
		call(watchSearchMediaItemsCatalogSaga),
		call(watchGetMediaItemCatalogDetailsSaga),
		call(watchSaveMediaItemSaga),

		call(watchFetchGroupsSaga),
		call(watchSaveGroupSaga),
		call(watchDeleteGroupSaga),

		call(watchFetchOwnPlatformsSaga),
		call(watchSaveOwnPlatformSaga),
		call(watchDeleteOwnPlatformSaga)
	]);
};
