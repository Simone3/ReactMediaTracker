import { loadCategoryDetails } from 'app/actions/category/generators';
import { CategoriesListComponent, CategoriesListComponentInput, CategoriesListComponentOutput } from 'app/components/category/list/categories-list';
import { State } from 'app/models/internal/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): CategoriesListComponentInput => {
	
	return {
		categories: state.categoriesList.categories
	};
};

const mapDispatchToProps = (dispatch: Dispatch): CategoriesListComponentOutput => {

	return {
		loadCategoryDetails: (category) => {
			dispatch(loadCategoryDetails(category));
		}
	};
};

/**
 * Container component that handles Redux state for CategoriesListComponent
 */
export const CategoriesListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoriesListComponent);
