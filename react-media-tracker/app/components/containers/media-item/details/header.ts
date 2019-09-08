import { HeaderComponent, HeaderComponentInput } from 'app/components/presentational/generic/header';
import { AppError } from 'app/data/models/internal/error';
import { State } from 'app/redux/state/state';
import { i18n } from 'app/utilities/i18n';
import { connect, MapStateToPropsParam } from 'react-redux';

const mapStateToProps: MapStateToPropsParam<HeaderComponentInput, MediaItemDetailsHeaderContainerProps, State> = (state: State, ownProps: MediaItemDetailsHeaderContainerProps): HeaderComponentInput => {
	
	const mediaItem = state.mediaItemDetails.mediaItem;
	if(!mediaItem) {

		throw AppError.GENERIC.withDetails('No media item was provided, cannot load details header');
	}

	return {
		...ownProps,
		title: mediaItem.id ? mediaItem.name : i18n.t(`mediaItem.details.title.new.${mediaItem.mediaType}`)
	};
};

/**
 * Container component that handles Redux state for HeaderComponent
 */
export const MediaItemDetailsHeaderContainer = connect(
	mapStateToProps,
	null
)(HeaderComponent);

/**
 * MediaItemDetailsHeaderContainer's props
 */
export type MediaItemDetailsHeaderContainerProps = Omit<HeaderComponentInput, 'title'>;
