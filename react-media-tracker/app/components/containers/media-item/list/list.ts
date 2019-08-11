import { MediaItemsListComponent, MediaItemsListComponentInput, MediaItemsListComponentOutput } from 'app/components/presentational/media-item/list/list';
import { AppError } from 'app/data/models/internal/error';
import { State } from 'app/redux/state/state';
import { connect } from 'react-redux';

const mapStateToProps = (state: State): MediaItemsListComponentInput => {
	
	if(!state.mediaItemsList.category) {

		throw AppError.GENERIC.withDetails('Category cannot be null while rendering the media items list');
	}

	return {
		category: state.mediaItemsList.category,
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
