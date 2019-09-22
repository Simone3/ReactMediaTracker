import { HeaderComponentInput } from 'app/components/presentational/generic/header';
import { SearchHeaderComponent, SearchHeaderComponentInput, SearchHeaderComponentOutput } from 'app/components/presentational/generic/header-search';
import { config } from 'app/config/config';
import { AppError } from 'app/data/models/internal/error';
import { searchMediaItems, stopMediaItemsSearchMode } from 'app/redux/actions/media-item/generators';
import { State } from 'app/redux/state/state';
import { i18n } from 'app/utilities/i18n';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State, ownProps: MediaItemsListHeaderContainerProps): SearchHeaderComponentInput => {

	const category = state.categoryGlobal.selectedCategory;
	if(!category) {

		throw AppError.GENERIC.withDetails('List state has no linked category, cannot display header');
	}

	const mediaType = category.mediaType;

	return {
		searchMode: state.mediaItemsList.mode === 'SEARCH',
		normalHeaderInput: {
			...ownProps,
			title: category.name
		},
		searchHeaderInput: {
			autoFocus: true,
			placeholder: i18n.t(`mediaItem.list.search.${mediaType}`),
			placeholderTextColor: config.ui.colors.colorContrastText,
			showLoading: false
		}
	};
};

const mapDispatchToProps = (dispatch: Dispatch): SearchHeaderComponentOutput => {

	return {
		onRequestSearchModeExit: () => {
			dispatch(stopMediaItemsSearchMode());
		},
		searchHeaderOutput: {
			onSearch: (term) => {
				dispatch(searchMediaItems(term));
			}
		}
	};
};

/**
 * Container component that handles Redux state for SearchHeaderComponent
 */
export const MediaItemsListHeaderContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchHeaderComponent);

/**
 * MediaItemsListHeaderContainer's props
 */
export type MediaItemsListHeaderContainerProps = Omit<HeaderComponentInput, 'title'>;
