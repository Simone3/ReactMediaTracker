import { call, put, select, takeEvery } from '@redux-saga/core/effects';
import { AppError } from 'app/data/models/internal/error';
import { MediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { mediaItemControllerFactory } from 'app/factories/media-item';
import { setError } from 'app/redux/actions/error/generators';
import { FETCH_MEDIA_ITEMS } from 'app/redux/actions/media-item/const';
import { completeFetchingMediaItems, failFetchingMediaItems, startFetchingMediaItems } from 'app/redux/actions/media-item/generators';
import { MediaItemsListState } from 'app/redux/state/media-item';
import { State } from 'app/redux/state/state';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that fetches the media items
 */
const fetchMediaItemsSaga = function * (): SagaIterator {

	yield put(startFetchingMediaItems());

	try {
		
		// Get values from state
		const listState: MediaItemsListState = yield select((state: State) => {

			return state.mediaItemsList;
		});
		const category = listState.category;
		const filter = listState.filter;
		const sortBy = listState.sortBy;
		if(!category || !filter || !sortBy) {

			throw AppError.GENERIC.withDetails('Something went wrong in the state initialization: cannot find values while fetching media items');
		}
		
		// Get the correct controller for the current category
		const mediaItemController = mediaItemControllerFactory.get(category);

		// Get the media items and return them
		const mediaItems: MediaItemInternal[] = yield call(mediaItemController.filter.bind(mediaItemController), category.id, filter, sortBy);
		yield put(completeFetchingMediaItems(mediaItems));
	}
	catch(error) {

		yield put(failFetchingMediaItems());
		
		yield put(setError(AppError.BACKEND_MEDIA_ITEM_FETCH.withDetails(error)));
	}
};

/**
 * Watcher saga that reacts to the fetch media items actions
 */
export const watchFetchMediaItemsSaga = function * (): SagaIterator {

	yield takeEvery(FETCH_MEDIA_ITEMS, fetchMediaItemsSaga);
};
