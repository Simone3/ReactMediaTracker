import { call, put, takeLatest } from '@redux-saga/core/effects';
import { categoryController } from 'app/data/controllers/core/entities/category';
import { AppError } from 'app/data/models/internal/error';
import { DELETE_CATEGORY } from 'app/redux/actions/category/const';
import { completeDeletingCategory, failDeletingCategory, startDeletingCategory } from 'app/redux/actions/category/generators';
import { DeleteCategoryAction } from 'app/redux/actions/category/types';
import { setError } from 'app/redux/actions/error/generators';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that deletes a category
 * @param action the intercepted action
 */
const deleteCategorySaga = function * (action: DeleteCategoryAction): SagaIterator {

	yield put(startDeletingCategory());

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

	yield takeLatest(DELETE_CATEGORY, deleteCategorySaga);
};
