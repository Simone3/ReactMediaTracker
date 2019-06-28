import { invalidateCategories } from 'app/actions/category/generators';
import { CategoryDetailsScreenComponent, CategoryDetailsScreenComponentInput, CategoryDetailsScreenComponentOutput } from 'app/components/category/details/category-details-screen';
import { State } from 'app/models/internal/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): CategoryDetailsScreenComponentInput => {
	
	return {
		isSaving: state.categoryDetails.isSaving,
		saveCompleted: state.categoryDetails.saveCompleted
	};
};

const mapDispatchToProps = (dispatch: Dispatch): CategoryDetailsScreenComponentOutput => {

	return {
		invalidateCategoriesList: () => {
			dispatch(invalidateCategories());
		}
	};
};

/**
 * Container component that handles Redux state for CategoryDetailsScreenComponent
 */
export const CategoryDetailsScreenContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoryDetailsScreenComponent);
