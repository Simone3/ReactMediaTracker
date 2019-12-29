import { call, put, takeLatest } from '@redux-saga/core/effects';
import { AppError } from 'app/data/models/internal/error';
import { COMPLETE_SAVING_CATEGORY, LOAD_CATEGORY_DETAILS, LOAD_NEW_CATEGORY_DETAILS, SELECT_CATEGORY } from 'app/redux/actions/category/const';
import { setError } from 'app/redux/actions/error/generators';
import { COMPLETE_SAVING_GROUP, LOAD_GROUP_DETAILS, LOAD_NEW_GROUP_DETAILS } from 'app/redux/actions/group/const';
import { COMPLETE_SAVING_MEDIA_ITEM, LOAD_MEDIA_ITEM_DETAILS, LOAD_NEW_MEDIA_ITEM_DETAILS } from 'app/redux/actions/media-item/const';
import { COMPLETE_SAVING_OWN_PLATFORM, LOAD_NEW_OWN_PLATFORM_DETAILS, LOAD_OWN_PLATFORM_DETAILS } from 'app/redux/actions/own-platform/const';
import { COMPLETE_CHECKING_USER_LOGIN_STATUS, COMPLETE_LOGGING_USER_IN, COMPLETE_LOGGING_USER_OUT, COMPLETE_SIGNING_USER_UP } from 'app/redux/actions/user/const';
import { CompleteCheckingUserLoginStatusAction } from 'app/redux/actions/user/types';
import { navigationService } from 'app/utilities/navigation-service';
import { AppScreens, AppSections } from 'app/utilities/screens';
import { Action } from 'redux';
import { SagaIterator } from 'redux-saga';

/**
 * All actions that trigger navigation
 */
const navigationActions = [
	COMPLETE_CHECKING_USER_LOGIN_STATUS,
	COMPLETE_SIGNING_USER_UP,
	COMPLETE_LOGGING_USER_IN,
	COMPLETE_LOGGING_USER_OUT,
	SELECT_CATEGORY,
	LOAD_NEW_CATEGORY_DETAILS,
	LOAD_CATEGORY_DETAILS,
	LOAD_NEW_MEDIA_ITEM_DETAILS,
	LOAD_MEDIA_ITEM_DETAILS,
	LOAD_NEW_GROUP_DETAILS,
	LOAD_GROUP_DETAILS,
	LOAD_NEW_OWN_PLATFORM_DETAILS,
	LOAD_OWN_PLATFORM_DETAILS,
	COMPLETE_SAVING_CATEGORY,
	COMPLETE_SAVING_MEDIA_ITEM,
	COMPLETE_SAVING_GROUP,
	COMPLETE_SAVING_OWN_PLATFORM
];

/**
 * Worker saga that changes app screen
 * @param action the intercepted action
 */
const navigationSaga = function * (action: Action): SagaIterator {
	
	try {

		switch(action.type) {

			case COMPLETE_CHECKING_USER_LOGIN_STATUS: {

				const completeCheckLoginAction = action as CompleteCheckingUserLoginStatusAction;
				yield call(navigationService.navigate.bind(navigationService), completeCheckLoginAction.user ? AppSections.Authenticated : AppSections.Unauthenticated);
				break;
			}

			case COMPLETE_SIGNING_USER_UP:
			case COMPLETE_LOGGING_USER_IN: {

				yield call(navigationService.navigate.bind(navigationService), AppSections.Authenticated);
				break;
			}

			case COMPLETE_LOGGING_USER_OUT: {

				yield call(navigationService.navigate.bind(navigationService), AppSections.Unauthenticated);
				break;
			}

			case SELECT_CATEGORY: {

				yield call(navigationService.navigate.bind(navigationService), AppScreens.MediaItemsList);
				break;
			}

			case LOAD_NEW_CATEGORY_DETAILS:
			case LOAD_CATEGORY_DETAILS: {

				yield call(navigationService.navigate.bind(navigationService), AppScreens.CategoryDetails);
				break;
			}

			case LOAD_NEW_MEDIA_ITEM_DETAILS:
			case LOAD_MEDIA_ITEM_DETAILS: {

				yield call(navigationService.navigate.bind(navigationService), AppScreens.MediaItemDetails);
				break;
			}

			case LOAD_NEW_GROUP_DETAILS:
			case LOAD_GROUP_DETAILS: {
				
				yield call(navigationService.navigate.bind(navigationService), AppScreens.GroupDetails);
				break;
			}

			case LOAD_NEW_OWN_PLATFORM_DETAILS:
			case LOAD_OWN_PLATFORM_DETAILS: {
				
				yield call(navigationService.navigate.bind(navigationService), AppScreens.OwnPlatformDetails);
				break;
			}

			case COMPLETE_SAVING_CATEGORY:
			case COMPLETE_SAVING_MEDIA_ITEM:
			case COMPLETE_SAVING_GROUP:
			case COMPLETE_SAVING_OWN_PLATFORM: {

				yield call(navigationService.back.bind(navigationService));
				break;
			}

			default: {

				throw AppError.GENERIC.withDetails(`Action ${action.type} does not have a defined navigation behavior`);
			}
		}
	}
	catch(error) {

		yield put(setError(AppError.GENERIC.withDetails(error)));
	}
};

/**
 * Watcher saga that reacts to the navigation actions
 */
export const watchNavigationSaga = function * (): SagaIterator {

	yield takeLatest(navigationActions, navigationSaga);
};
