
import { saveCategory } from 'app/actions/category/generators';
import { CategoryFormComponent, CategoryFormComponentInput, CategoryFormComponentOutput } from 'app/components/category/details/category-form';
import { AppError } from 'app/models/internal/error';
import { State } from 'app/models/internal/state/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): CategoryFormComponentInput => {
	
	if(!state.categoryDetails.category) {

		throw AppError.GENERIC.withDetails('App navigated to the details screen with undefined details');
	}

	return {
		initialValues: state.categoryDetails.category
	};
};

const mapDispatchToProps = (dispatch: Dispatch): CategoryFormComponentOutput => {

	return {
		saveCategory: (category) => {
			dispatch(saveCategory(category));
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