import React, { Component, ReactNode } from 'react';
import { MediaItemInternal, CatalogMediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { MediaTypeSwitcherComponent } from 'app/components/presentational/generic/media-switcher';
import { BookFormComponent } from 'app/components/presentational/media-item/details/form/wrapper/book';
import { MovieFormComponent } from 'app/components/presentational/media-item/details/form/wrapper/movie';
import { TvShowFormComponent } from 'app/components/presentational/media-item/details/form/wrapper/tv-show';
import { VideogameFormComponent } from 'app/components/presentational/media-item/details/form/wrapper/videogame';
import { GroupInternal } from 'app/data/models/internal/group';
import { OwnPlatformInternal } from 'app/data/models/internal/own-platform';

/**
 * Presentational component that switches on the correct media item form component based on its media type.
 * This is the entry point of the media item form.
 */
export class MediaItemFormComponent extends Component<MediaItemFormComponentProps> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<MediaTypeSwitcherComponent
				discriminator={this.props.initialValues}
				book={<BookFormComponent {...this.props} />}
				movie={<MovieFormComponent {...this.props} />}
				tvShow={<TvShowFormComponent {...this.props} />}
				videogame={<VideogameFormComponent {...this.props} />}
			/>
		);
	}
}

/**
 * MediaItemFormComponent's input props
 */
export type MediaItemFormComponentInput = {

	/**
	 * The initial media item values for the form inputs
	 */
	initialValues: MediaItemInternal;

	/**
	 * If set, the media item catalog details are requested to be loaded into the form
	 */
	loadCatalogDetails?: CatalogMediaItemInternal;

	/**
	 * The currently selected group, if any
	 */
	selectedGroup?: GroupInternal;

	/**
	 * The currently selected own platform, if any
	 */
	selectedOwnPlatform?: OwnPlatformInternal;

	/**
	 * If an external component requests the form submission. Triggers form validation and, if OK, its submission.
	 */
	saveRequested: boolean;

	/**
	 * If an external component requests confirmation to save the media item even if there's already one with the same name
	 */
	sameNameConfirmationRequested: boolean;
}

/**
 * MediaItemFormComponent's output props
 */
export type MediaItemFormComponentOutput = {

	/**
	 * Callback to notify the current status of the form
	 * @param valid true if the form is valid, i.e. no validation error occurred
	 * @param dirty true if the form is dirty, i.e. one or more fields are different from initial values
	 */
	notifyFormStatus: (valid: boolean, dirty: boolean) => void;

	/**
	 * Callback to save the media item, after form validation is successful
	 * @param mediaItem the media item to be saved
	 * @param confirmSameName if the user confirmed to create a media item with the same name as an existing one
	 */
	saveMediaItem: (mediaItem: MediaItemInternal, confirmSameName: boolean) => void;

	/**
	 * Callback to request the group selection
	 */
	requestGroupSelection: () => void;

	/**
	 * Callback to request the own platform selection
	 */
	requestOwnPlatformSelection: () => void;
}

/**
 * MediaItemFormComponent's props
 */
export type MediaItemFormComponentProps = MediaItemFormComponentInput & MediaItemFormComponentOutput;
