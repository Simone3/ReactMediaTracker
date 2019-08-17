import { call, put, select, takeLatest } from '@redux-saga/core/effects';
import { AppError } from 'app/data/models/internal/error';
import { MediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { mediaItemControllerFactory } from 'app/factories/controller-factories';
import { setError } from 'app/redux/actions/error/generators';
import { FETCH_MEDIA_ITEMS, SEARCH_MEDIA_ITEMS } from 'app/redux/actions/media-item/const';
import { completeFetchingMediaItems, failFetchingMediaItems, startFetchingMediaItems } from 'app/redux/actions/media-item/generators';
import { State } from 'app/redux/state/state';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that fetches the media items
 */
const fetchMediaItemsSaga = function * (): SagaIterator {

	yield put(startFetchingMediaItems());

	try {
		
		// Get values from state
		const state: State = yield select();
		const mode = state.mediaItemsList.mode;
		const category = state.categoryGlobal.selectedCategory;
		if(!category) {

			throw AppError.GENERIC.withDetails('Something went wrong during state initialization: cannot find category while fetching media items');
		}

		// Get the correct controller for the current category
		const mediaItemController = mediaItemControllerFactory.get(category);

		// Retrieve media items from controller
		let mediaItems: MediaItemInternal[];
		switch(mode) {

			// Normal fetching mode is the standard one, based on the current filter and sort options
			case 'NORMAL': {

				const filter = state.mediaItemsList.filter;
				const sortBy = state.mediaItemsList.sortBy;
				if(!filter || !sortBy) {
		
					throw AppError.GENERIC.withDetails('Something went wrong during state initialization: cannot find filter and sort options');
				}

				mediaItems = yield call(mediaItemController.filter.bind(mediaItemController), category.id, filter, sortBy);

				break;
			}

			// Search fetching mode allows to search media items by term
			case 'SEARCH': {

				const term = state.mediaItemsList.searchTerm;
				if(!term) {
		
					throw AppError.GENERIC.withDetails('Something went wrong during state initialization: cannot find search term');
				}

				mediaItems = yield call(mediaItemController.search.bind(mediaItemController), category.id, term);

				break;
			}

			default: {
				
				throw AppError.GENERIC.withDetails(`Mode ${mode} is not mapped in fetch saga`);
			}
		}

		// Get the media items and return them
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

	yield takeLatest([ FETCH_MEDIA_ITEMS, SEARCH_MEDIA_ITEMS ], fetchMediaItemsSaga);
};
