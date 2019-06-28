import { CategoryDetailsScreenComponent, CategoryDetailsScreenComponentInput } from 'app/components/category/details/category-details-screen';
import { State } from 'app/models/internal/state';
import { connect } from 'react-redux';

const mapStateToProps = (state: State): CategoryDetailsScreenComponentInput => {
	
	return {
		isSaving: state.categoryDetails.isSaving,
		wasSaved: state.categoryDetails.saveCompleted
	};
};

/**
 * Container component that handles Redux state for CategoryDetailsScreenComponent
 */
export const CategoryDetailsScreenContainer = connect(
	mapStateToProps,
	null
)(CategoryDetailsScreenComponent);
