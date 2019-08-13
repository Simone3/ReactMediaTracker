import { call, put, select, takeEvery } from '@redux-saga/core/effects';
import { AppError } from 'app/data/models/internal/error';
import { mediaItemControllerFactory } from 'app/factories/controller-factories';
import { setError } from 'app/redux/actions/error/generators';
import { MARK_MEDIA_ITEM_AS_ACTIVE, MARK_MEDIA_ITEM_AS_COMPLETE, MARK_MEDIA_ITEM_AS_REDO } from 'app/redux/actions/media-item/const';
import { completeInlineUpdatingMediaItem, failInlineUpdatingMediaItem, startInlineUpdatingMediaItem } from 'app/redux/actions/media-item/generators';
import { MarkMediaItemAsActiveAction, MarkMediaItemAsCompleteAction, MarkMediaItemAsRedoAction } from 'app/redux/actions/media-item/types';
import { MediaItemsListState } from 'app/redux/state/media-item';
import { State } from 'app/redux/state/state';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that updates a media item "inline" (with pre-defined changes from the list screen)
 * @param action the intercepted action
 */
const inlineMediaItemUpdateSaga = function * (action: MarkMediaItemAsActiveAction | MarkMediaItemAsCompleteAction | MarkMediaItemAsRedoAction): SagaIterator {

	yield put(startInlineUpdatingMediaItem());

	try {

		const mediaItem = action.mediaItem;

		// Get values from state
		const listState: MediaItemsListState = yield select((state: State) => {

			return state.mediaItemsList;
		});
		const category = listState.category;
		if(!category) {

			throw AppError.GENERIC.withDetails('Something went wrong during state initialization: cannot find values while inline updating media item');
		}

		// Change the model object with the pre-defined changes based on action type
		switch(action.type) {

			case MARK_MEDIA_ITEM_AS_ACTIVE: {

				mediaItem.active = true;
				mediaItem.status = 'ACTIVE';
				break;
			}

			case MARK_MEDIA_ITEM_AS_COMPLETE: {

				const completionDates = mediaItem.completedAt ? mediaItem.completedAt : [];
				completionDates.push(new Date());
				mediaItem.completedAt = completionDates;
				mediaItem.status = 'COMPLETE';
				break;
			}

			case MARK_MEDIA_ITEM_AS_REDO: {
				
				mediaItem.markedAsRedo = true;
				mediaItem.status = 'REDO';
				break;
			}

			default: {

				throw AppError.GENERIC.withDetails(`Action ${action.type} was intercepted by saga but no case was matched`);
			}
		}
		
		// Get the correct controller for the current category
		const mediaItemController = mediaItemControllerFactory.get(category);

		// Update the media item
		yield call(mediaItemController.save.bind(mediaItemController), category.id, mediaItem);
		yield put(completeInlineUpdatingMediaItem());
	}
	catch(error) {

		yield put(failInlineUpdatingMediaItem());
		
		yield put(setError(AppError.BACKEND_MEDIA_ITEM_SAVE.withDetails(error)));
	}
};

/**
 * Watcher saga that reacts to the inline media item update actions
 */
export const watchInlineMediaItemUpdateSaga = function * (): SagaIterator {

	yield takeEvery([ MARK_MEDIA_ITEM_AS_ACTIVE, MARK_MEDIA_ITEM_AS_COMPLETE, MARK_MEDIA_ITEM_AS_REDO ], inlineMediaItemUpdateSaga);
};
