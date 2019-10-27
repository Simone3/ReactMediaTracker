
import { MediaItemFormComponent, MediaItemFormComponentInput, MediaItemFormComponentOutput } from 'app/components/presentational/media-item/details/form/wrapper';
import { AppError } from 'app/data/models/internal/error';
import { resetMediaItemCatalogDetails, saveMediaItem, setMediaItemFormStatus } from 'app/redux/actions/media-item/generators';
import { State } from 'app/redux/state/state';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State): MediaItemFormComponentInput => {
	
	if(!state.mediaItemDetails.mediaItem) {

		throw AppError.GENERIC.withDetails('App navigated to the details screen with undefined details');
	}
	
	return {
		initialValues: state.mediaItemDetails.mediaItem,
		saveRequested: state.mediaItemDetails.saveStatus === 'REQUESTED',
		loadCatalogDetails: state.mediaItemDetails.catalogDetails,
		sameNameConfirmationRequested: state.mediaItemDetails.saveStatus === 'REQUIRES_CONFIRMATION'
	};
};

const mapDispatchToProps = (dispatch: Dispatch): MediaItemFormComponentOutput => {

	return {
		saveMediaItem: (mediaItem, confirmSameName) => {
			dispatch(saveMediaItem(mediaItem, confirmSameName));
		},
		notifyFormStatus: (valid, dirty) => {
			dispatch(setMediaItemFormStatus(valid, dirty));
		},
		onCatalogDetailsLoaded: () => {
			dispatch(resetMediaItemCatalogDetails());
		}
	};
};

/**
 * Container component that handles Redux state for MediaItemFormComponent
 */
export const MediaItemFormContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(MediaItemFormComponent);
