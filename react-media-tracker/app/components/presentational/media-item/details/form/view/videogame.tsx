import React, { Component, ReactNode } from 'react';
import { FormikProps } from 'formik';
import { MediaItemFormViewComponent, MediaItemFormViewComponentCommonInput, MediaItemFormViewComponentCommonOutput } from 'app/components/presentational/media-item/details/form/view/media-item';
import { VideogameInternal } from 'app/data/models/internal/media-items/videogame';

/**
 * Presentational component that contains all videogame form input fields, all handled by the Formik container component
 */
export class VideogameFormViewComponent extends Component<VideogameFormViewComponentProps> {

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<MediaItemFormViewComponent
				{...this.props}
				primarySpecificFields={[]}
			/>
		);
	}
}

/**
 * VideogameFormViewComponent's input props
 */
export type VideogameFormViewComponentInput = MediaItemFormViewComponentCommonInput;

/**
 * VideogameFormViewComponent's output props
 */
export type VideogameFormViewComponentOutput = MediaItemFormViewComponentCommonOutput;

/**
 * All props of VideogameFormViewComponent
 */
export type VideogameFormViewComponentProps = FormikProps<VideogameInternal> & VideogameFormViewComponentInput & VideogameFormViewComponentOutput;
