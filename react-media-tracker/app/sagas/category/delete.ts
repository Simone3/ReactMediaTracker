import { call, put, takeEvery } from '@redux-saga/core/effects';
import { DELETE_CATEGORY } from 'app/actions/category/const';
import { completeDeletingCategory, startDeletingCategory } from 'app/actions/category/generators';
import { DeleteCategoryAction } from 'app/actions/category/types';
import { categoryController } from 'app/controllers/entities/category';
import { SagaIterator } from 'redux-saga';

/**
 * Worker saga that deletes a category
 * @param action the intercepted action
 */
const deleteCategorySaga = function * (action: DeleteCategoryAction): SagaIterator {

	yield put(startDeletingCategory(action.category));

	yield call(categoryController.deleteCategory, action.category.id);
	
	yield put(completeDeletingCategory());
};

/**
 * Watcher saga that reacts to the delete category actions
 */
export const watchDeleteCategorySaga = function * (): SagaIterator {

	yield takeEvery(DELETE_CATEGORY, deleteCategorySaga);
};
