import { MediaItemDetailsScreenComponent, MediaItemDetailsScreenComponentInput } from 'app/components/presentational/media-item/details/screen';
import { State } from 'app/redux/state/state';
import { connect } from 'react-redux';

const mapStateToProps = (state: State): MediaItemDetailsScreenComponentInput => {
	
	const details = state.mediaItemDetails;
	
	return {
		isLoading: details.saveStatus === 'SAVING' || state.mediaItemDetails.catalogStatus === 'FETCHING',
		wasSaved: state.mediaItemDetails.saveStatus === 'SAVED'
	};
};

/**
 * Container component that handles Redux state for MediaItemDetailsScreenComponent
 */
export const MediaItemDetailsScreenContainer = connect(
	mapStateToProps,
	null
)(MediaItemDetailsScreenComponent);
