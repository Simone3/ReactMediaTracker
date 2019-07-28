import { deleteCategory, loadCategoryDetails, removeCategoryHighlight } from 'app/actions/category/generators';
import { CategoryModalComponent, CategoryModalComponentInput, CategoryModalComponentOutput } from 'app/components/category/list/category-modal';
import { State } from 'app/models/internal/state/state';
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
