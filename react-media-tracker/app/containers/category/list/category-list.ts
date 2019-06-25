import { fetchCategories } from 'app/actions/category';
import { CategoryListComponent, CategoryListComponentInput, CategoryListComponentOutput } from 'app/components/category/list/category-list';
import { State } from 'app/models/internal/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): CategoryListComponentInput => {
	
	return {
		categories: state.categories.items,
		isLoading: state.categories.isFetching,
		requiresReload: state.categories.requiresReload
	};
};

const mapDispatchToProps = (dispatch: Dispatch): CategoryListComponentOutput => {

	return {
		requestFetchCategories: () => {
			dispatch(fetchCategories());
		}
	};
};

/**
 * Container component that handles Redux state for CategoryListComponent
 */
export const CategoryListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CategoryListComponent);
