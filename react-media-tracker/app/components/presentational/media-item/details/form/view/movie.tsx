import React, { Component, ReactNode } from 'react';
import { FormikProps, FormikValues } from 'formik';
import { MediaItemFormViewComponent, MediaItemFormViewComponentInput, MediaItemFormViewComponentOutput } from 'app/components/presentational/media-item/details/form/view/media-item';

/**
 * Presentational component that contains all movie form input fields, all handled by the Formik container component
 */
export class MovieFormViewComponent extends Component<MovieFormViewComponentProps> {

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<MediaItemFormViewComponent {...this.props} />
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
export type MovieFormViewComponentProps = FormikProps<FormikValues> & MovieFormViewComponentInput & MovieFormViewComponentOutput;
