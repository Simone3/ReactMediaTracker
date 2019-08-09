import { CategoriesListComponent, CategoriesListComponentInput, CategoriesListComponentOutput } from 'app/components/presentational/category/list/list';
import { State } from 'app/data/models/internal/state/state';
import { highlightCategory } from 'app/redux/actions/category/generators';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): CategoriesListComponentInput => {
	
	return {
		categories: state.categoriesList.categories
	};
};

const mapDispatchToProps = (dispatch: Dispatch): CategoriesListComponentOutput => {

	return {
		highlightCategory: (category) => {
			dispatch(highlightCategory(category));
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
