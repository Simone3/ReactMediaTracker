import { MediaItemDetailsScreenComponent, MediaItemDetailsScreenComponentInput } from 'app/components/presentational/media-item/details/screen';
import { State } from 'app/redux/state/state';
import { connect } from 'react-redux';

const mapStateToProps = (state: State): MediaItemDetailsScreenComponentInput => {
	
	return {
		isLoading: state.mediaItemDetails.saveStatus === 'SAVING',
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
