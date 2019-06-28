import { CategoriesListComponent, CategoriesListComponentInput } from 'app/components/category/list/categories-list';
import { State } from 'app/models/internal/state';
import { connect } from 'react-redux';

const mapStateToProps = (state: State): CategoriesListComponentInput => {
	
	return {
		categories: state.categoriesList.categories
	};
};

/**
 * Container component that handles Redux state for CategoriesListComponent
 */
export const CategoriesListContainer = connect(
	mapStateToProps,
	null
)(CategoriesListComponent);
