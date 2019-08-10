import { MediaItemsListComponent, MediaItemsListComponentInput, MediaItemsListComponentOutput } from 'app/components/presentational/media-item/list/list';
import { State } from 'app/redux/state/state';
import { connect } from 'react-redux';

const mapStateToProps = (state: State): MediaItemsListComponentInput => {
	
	return {
		mediaItems: state.mediaItemsList.mediaItems
	};
};

const mapDispatchToProps = (): MediaItemsListComponentOutput => {

	return {
		highlightMediaItem: () => {
			// Redux action here
		}
	};
};

/**
 * Container component that handles Redux state for MediaItemsListComponent
 */
export const MediaItemsListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MediaItemsListComponent);
