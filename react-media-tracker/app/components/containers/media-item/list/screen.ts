import { MediaItemsListScreenComponent, MediaItemsListScreenComponentInput, MediaItemsListScreenComponentOutput } from 'app/components/presentational/media-item/list/screen';
import { fetchMediaItems } from 'app/redux/actions/media-item/generators';
import { State } from 'app/redux/state/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): MediaItemsListScreenComponentInput => {
	
	const listState = state.mediaItemsList;

	return {
		isLoading: listState.status === 'FETCHING' || listState.status === 'DELETING' || listState.status === 'INLINE_UPDATING',
		requiresFetch: listState.status === 'REQUIRES_FETCH'
	};
};

const mapDispatchToProps = (dispatch: Dispatch): MediaItemsListScreenComponentOutput => {

	return {
		fetchMediaItems: () => {
			dispatch(fetchMediaItems());
		},
		loadNewMediaItemDetails: () => {
			// Redux action here
		},
		loadMediaItemDetails: () => {
			// Redux action here
		}
	};
};

/**
 * Container component that handles Redux state for MediaItemsListScreenComponent
 */
export const MediaItemsListScreenContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MediaItemsListScreenComponent);
