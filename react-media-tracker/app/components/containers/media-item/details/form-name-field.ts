
import { SearchTextInputComponent, SearchTextInputComponentInput, SearchTextInputComponentOutput, SearchTextInputComponentSuggestion } from 'app/components/presentational/form/search-text-input';
import { getMediaItemCatalogDetails, searchMediaItemsCatalog } from 'app/redux/actions/media-item/generators';
import { State } from 'app/redux/state/state';
import { i18n } from 'app/utilities/i18n';
import { ImageRequireSource } from 'react-native';
import { connect, MapStateToPropsParam } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps: MapStateToPropsParam<SearchTextInputComponentInput, MediaItemFormNameFieldContainerProps, State> = (state: State, ownProps: MediaItemFormNameFieldContainerProps): SearchTextInputComponentInput => {
	
	const catalogSearchResults = state.mediaItemDetails.catalogSearchResults;
	let suggestions: SearchTextInputComponentSuggestion[] | undefined;
	if(catalogSearchResults) {

		suggestions = catalogSearchResults.map((result) => {

			return {
				key: result.catalogId,
				value: result.releaseDate ? i18n.t('mediaItem.details.catalog.result.fullLabel', { name: result.name, releaseDate: result.releaseDate.getFullYear() }) : result.name
			};
		});
	}

	return {
		...ownProps,
		suggestions: suggestions
	};
};

const mapDispatchToProps = (dispatch: Dispatch): SearchTextInputComponentOutput => {

	return {
		onSearch: (term) => {
			dispatch(searchMediaItemsCatalog(term));
		},
		onSelectSuggestion: (catalogId) => {
			dispatch(getMediaItemCatalogDetails(catalogId));
		}
	};
};

/**
 * Container component that handles Redux state for SearchTextInputComponent
 */
export const MediaItemFormNameFieldContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchTextInputComponent);

/**
 * MediaItemFormNameFieldContainer's props
 */
export type MediaItemFormNameFieldContainerProps = {

	/**
	 * The input name (unique in the form)
	 */
	name: string;

	/**
	 * The text placeholder
	 */
	placeholder: string;

	/**
	 * The input icon
	 */
	icon: ImageRequireSource;
};
