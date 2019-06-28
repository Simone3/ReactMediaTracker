import { fetchCategories, loadCategoryDetails, loadNewCategoryDetails } from 'app/actions/category/generators';
import { CategoriesListScreenComponent, CategoriesListScreenComponentInput, CategoriesListScreenComponentOutput } from 'app/components/category/list/categories-list-screen';
import { State } from 'app/models/internal/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): CategoriesListScreenComponentInput => {
	
	const listState = state.categoriesList;

	return {
		isLoading: listState.isFetching || listState.isDeleting,
		requiresReload: listState.requiresReload
	};
};

const mapDispatchToProps = (dispatch: Dispatch): CategoriesListScreenComponentOutput => {

	return {
		fetchCategories: () => {
			dispatch(fetchCategories());
		},
		loadNewCategoryDetails: () => {
			dispatch(loadNewCategoryDetails());
		},
		loadCategoryDetails: (category) => {
			dispatch(loadCategoryDetails(category));
		}
	};
};

/**
 * Container component that handles Redux state for CategoriesListScreenComponent
 */
export const CategoriesListScreenContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoriesListScreenComponent);
