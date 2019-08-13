import { MediaItemModalComponent, MediaItemModalComponentInput, MediaItemModalComponentOutput } from 'app/components/presentational/media-item/list/modal';
import { deleteMediaItem, markMediaItemAsActive, markMediaItemAsComplete, markMediaItemAsRedo, removeMediaItemHighlight } from 'app/redux/actions/media-item/generators';
import { State } from 'app/redux/state/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): MediaItemModalComponentInput => {
	
	return {
		mediaItem: state.mediaItemsList.highlightedMediaItem
	};
};

const mapDispatchToProps = (dispatch: Dispatch): MediaItemModalComponentOutput => {

	return {
		delete: (mediaItem) => {
			dispatch(deleteMediaItem(mediaItem));
		},
		edit: () => {
			// Redux action here
		},
		markAsActive: (mediaItem) => {
			dispatch(markMediaItemAsActive(mediaItem));
		},
		markAsComplete: (mediaItem) => {
			dispatch(markMediaItemAsComplete(mediaItem));
		},
		markAsRedo: (mediaItem) => {
			dispatch(markMediaItemAsRedo(mediaItem));
		},
		close: () => {
			dispatch(removeMediaItemHighlight());
		}
	};
};

/**
 * Container component that handles Redux state for MediaItemModalComponent
 */
export const MediaItemModalContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MediaItemModalComponent);
