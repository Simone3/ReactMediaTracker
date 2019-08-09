import { CategoryModalComponent, CategoryModalComponentInput, CategoryModalComponentOutput } from 'app/components/presentational/category/list/modal';
import { State } from 'app/data/models/internal/state/state';
import { deleteCategory, loadCategoryDetails, removeCategoryHighlight } from 'app/redux/actions/category/generators';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): CategoryModalComponentInput => {
	
	return {
		category: state.categoriesList.highlightedCategory
	};
};

const mapDispatchToProps = (dispatch: Dispatch): CategoryModalComponentOutput => {

	return {
		delete: (category) => {
			dispatch(deleteCategory(category));
		},
		edit: (category) => {
			dispatch(loadCategoryDetails(category));
		},
		close: () => {
			dispatch(removeCategoryHighlight());
		}
	};
};

/**
 * Container component that handles Redux state for CategoryModalComponent
 */
export const CategoryModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoryModalComponent);
