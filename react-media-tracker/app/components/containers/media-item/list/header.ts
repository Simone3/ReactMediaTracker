import { SearchHeaderComponent, SearchHeaderComponentInput, SearchHeaderComponentOutput } from 'app/components/presentational/generic/header-search';
import { config } from 'app/config/config';
import { AppError } from 'app/data/models/internal/error';
import { mediaItemLangPrefixFactory } from 'app/factories/misc-factories';
import { searchMediaItems, stopMediaItemsSearchMode } from 'app/redux/actions/media-item/generators';
import { State } from 'app/redux/state/state';
import { i18n } from 'app/utilities/i18n';
import { ReactNode } from 'react';
import { connect, MapStateToPropsParam } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps: MapStateToPropsParam<SearchHeaderComponentInput, MediaItemsListHeaderContainerProps, State> = (state: State, ownProps: MediaItemsListHeaderContainerProps): SearchHeaderComponentInput => {

	const category = state.mediaItemsList.category;
	if(!category) {

		throw AppError.GENERIC.withDetails('List state has no linked category, cannot display header');
	}

	const langPrefix = mediaItemLangPrefixFactory.get(category);

	return {
		searchMode: state.mediaItemsList.mode === 'SEARCH',
		normalHeaderInput: {
			title: category.name,
			icons: ownProps.icons
		},
		searchHeaderInput: {
			autoFocus: true,
			placeholder: i18n.t(`${langPrefix}.list.search`),
			showLoading: false,
			submitDelayMilliseconds: config.timers.mediaItems.searchSubmitTimerMilliseconds
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
export type MediaItemsListHeaderContainerProps = {
	
	/**
	 * The header icons
	 */
	icons: ReactNode;
}
