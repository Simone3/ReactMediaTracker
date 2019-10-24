import React, { Component, ReactNode } from 'react';
import { FormikProps } from 'formik';
import { MediaItemFormViewComponent, MediaItemFormViewComponentInput, MediaItemFormViewComponentOutput } from 'app/components/presentational/media-item/details/form/view/media-item';
import { i18n } from 'app/utilities/i18n';
import { images } from 'app/utilities/images';
import { TextInputFieldComponent } from 'app/components/presentational/form/fields/text-input';
import { MovieInternal } from 'app/data/models/internal/media-items/movie';

/**
 * Presentational component that contains all movie form input fields, all handled by the Formik container component
 */
export class MovieFormViewComponent extends Component<MovieFormViewComponentProps> {

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<MediaItemFormViewComponent {...this.props}>
				{this.durationField()}
			</MediaItemFormViewComponent>
		);
	}

	/**
	 * Helper
	 * @returns the duration component
	 */
	private durationField(): ReactNode {

		return (
			<TextInputFieldComponent
				name='durationMinutes'
				placeholder={i18n.t('mediaItem.details.placeholders.duration.MOVIE')}
				icon={images.durationField()}
				keyboardType='number-pad'
			/>
		);
	}
}

/**
 * MovieFormViewComponent's input props
 */
export type MovieFormViewComponentInput = MediaItemFormViewComponentInput;

/**
 * MovieFormViewComponent's output props
 */
export type MovieFormViewComponentOutput = MediaItemFormViewComponentOutput;

/**
 * All props of MovieFormViewComponent
 */
export type MovieFormViewComponentProps = FormikProps<MovieInternal> & MovieFormViewComponentInput & MovieFormViewComponentOutput;
