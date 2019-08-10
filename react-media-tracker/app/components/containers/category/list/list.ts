import { CategoriesListComponent, CategoriesListComponentInput, CategoriesListComponentOutput } from 'app/components/presentational/category/list/list';
import { highlightCategory } from 'app/redux/actions/category/generators';
import { openMediaItemsList } from 'app/redux/actions/media-item/generators';
import { State } from 'app/redux/state/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): CategoriesListComponentInput => {
	
	return {
		categories: state.categoriesList.categories
	};
};

const mapDispatchToProps = (dispatch: Dispatch): CategoriesListComponentOutput => {

	return {
		selectCategory: (category) => {
			dispatch(openMediaItemsList(category));
		},
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
