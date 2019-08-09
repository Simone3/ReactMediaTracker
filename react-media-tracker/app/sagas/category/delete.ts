import { call, put, takeEvery } from '@redux-saga/core/effects';
import { DELETE_CATEGORY } from 'app/actions/category/const';
import { completeDeletingCategory, failDeletingCategory, startDeletingCategory } from 'app/actions/category/generators';
import { DeleteCategoryAction } from 'app/actions/category/types';
import { setError } from 'app/actions/error/generators';
import { categoryController } from 'app/controllers/core/entities/category';
import { AppError } from 'app/models/internal/error';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that deletes a category
 * @param action the intercepted action
 */
const deleteCategorySaga = function * (action: DeleteCategoryAction): SagaIterator {

	yield put(startDeletingCategory(action.category));

	try {

		yield call(categoryController.deleteCategory.bind(categoryController), action.category.id);
		
		yield put(completeDeletingCategory());
	}
	catch(error) {

		yield put(failDeletingCategory());
		
		yield put(setError(AppError.BACKEND_CATEGORY_DELETE.withDetails(error)));
	}
};

/**
 * Watcher saga that reacts to the delete category actions
 */
export const watchDeleteCategorySaga = function * (): SagaIterator {

	yield takeEvery(DELETE_CATEGORY, deleteCategorySaga);
};
