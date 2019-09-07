import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { AppError } from 'app/data/models/internal/error';
import { mediaItemControllerFactory } from 'app/factories/controller-factories';
import { setError } from 'app/redux/actions/error/generators';
import { SAVE_MEDIA_ITEM } from 'app/redux/actions/media-item/const';
import { completeSavingMediaItem, failSavingMediaItem, startSavingMediaItem } from 'app/redux/actions/media-item/generators';
import { SaveMediaItemAction } from 'app/redux/actions/media-item/types';
import { State } from 'app/redux/state/state';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that saves a media item
 * @param action the intercepted action
 */
const saveMediaItemSaga = function * (action: SaveMediaItemAction): SagaIterator {

	yield put(startSavingMediaItem(action.mediaItem));

	// Get linked controller
	const mediaItemController = mediaItemControllerFactory.get(action.mediaItem.mediaType);
	
	// Get values from state
	const state: State = yield select();
	const category = state.categoryGlobal.selectedCategory;
	if(!category) {

		throw AppError.GENERIC.withDetails('Something went wrong during state initialization: cannot find values while saving media item');
	}

	try {

		yield call(mediaItemController.save.bind(mediaItemController), category.id, action.mediaItem);
		
		yield put(completeSavingMediaItem());
	}
	catch(error) {

		yield put(failSavingMediaItem());
		
		yield put(setError(AppError.BACKEND_MEDIA_ITEM_SAVE.withDetails(error)));
	}
};

/**
 * Watcher saga that reacts to the save media item actions
 */
export const watchSaveMediaItemSaga = function * (): SagaIterator {

	yield takeLatest(SAVE_MEDIA_ITEM, saveMediaItemSaga);
};
