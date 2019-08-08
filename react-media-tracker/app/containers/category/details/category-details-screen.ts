import { CategoryDetailsScreenComponent, CategoryDetailsScreenComponentInput } from 'app/components/category/details/category-details-screen';
import { State } from 'app/models/internal/state/state';
import { connect } from 'react-redux';

const mapStateToProps = (state: State): CategoryDetailsScreenComponentInput => {
	
	return {
		isLoading: state.categoryDetails.saveStatus === 'SAVING',
		wasSaved: state.categoryDetails.saveStatus === 'SAVED'
	};
};

/**
 * Container component that handles Redux state for CategoryDetailsScreenComponent
 */
export const CategoryDetailsScreenContainer = connect(
	mapStateToProps,
	null
)(CategoryDetailsScreenComponent);
