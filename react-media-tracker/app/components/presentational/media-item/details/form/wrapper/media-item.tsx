import React, { Component, ReactNode } from 'react';
import { MediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { MediaTypeSwitcherComponent } from 'app/components/presentational/generic/media-switcher';
import { MovieFormComponent } from 'app/components/presentational/media-item/details/form/wrapper/movie';

/**
 * Presentational component that handles the Formik wrapper component for the generic media item form
 */
export class MediaItemFormComponent extends Component<MediaItemFormComponentProps> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<MediaTypeSwitcherComponent
				discriminator={this.props.initialValues}
				book={null}
				movie={<MovieFormComponent {...this.props} />}
				tvShow={null}
				videogame={null}
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
	 * If an external component requests the form submission. Triggers form validation and, if OK, its submission.
	 */
	saveRequested: boolean;
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
	 */
	saveMediaItem: (mediaItem: MediaItemInternal) => void;
}

/**
 * MediaItemFormComponent's props
 */
export type MediaItemFormComponentProps = MediaItemFormComponentInput & MediaItemFormComponentOutput;