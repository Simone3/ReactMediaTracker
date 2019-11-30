import { MediaItemDetailsScreenComponent, MediaItemDetailsScreenComponentInput } from 'app/components/presentational/media-item/details/screen';
import { State } from 'app/redux/state/state';
import { connect } from 'react-redux';

const mapStateToProps = (state: State): MediaItemDetailsScreenComponentInput => {
	
	const details = state.mediaItemDetails;
	
	const mediaItemLoading = details.saveStatus === 'SAVING';
	const catalogLoading = state.mediaItemDetails.catalogStatus === 'FETCHING';
	const groupsLoading = state.groupsList.status === 'DELETING' || state.groupsList.status === 'FETCHING';

	return {
		isLoading: mediaItemLoading || catalogLoading || groupsLoading
	};
};

/**
 * Container component that handles Redux state for MediaItemDetailsScreenComponent
 */
export const MediaItemDetailsScreenContainer = connect(
	mapStateToProps,
	null
)(MediaItemDetailsScreenComponent);
