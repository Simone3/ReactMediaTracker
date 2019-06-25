import { invalidateCategories, loadNewCategory, saveCategory } from 'app/actions/category';
import { CategoryFormComponent, CategoryFormComponentInput, CategoryFormComponentOutput } from 'app/components/category/details/category-form';
import { State } from 'app/models/internal/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): CategoryFormComponentInput => {
	
	return {
		initialValues: state.categoryDetails.category,
		isSaving: state.categoryDetails.isSaving,
		saveCompleted: state.categoryDetails.saveCompleted
	};
};

const mapDispatchToProps = (dispatch: Dispatch): CategoryFormComponentOutput => {

	return {
		loadInitialValues: () => {
			// TODO handle here the update case!
			dispatch(loadNewCategory());
		},
		saveCategory: (category) => {
			dispatch(saveCategory(category));
		},
		requestCategoriesListReload: () => {
			dispatch(invalidateCategories());
		}
	};
};

/**
 * Container component that handles Redux state for CategoryFormComponent
 */
export const CategoryFormContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoryFormComponent);
