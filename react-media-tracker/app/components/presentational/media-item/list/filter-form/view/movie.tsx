import React, { Component, ReactNode } from 'react';
import { FormikProps, FormikValues } from 'formik';
import { MediaItemFilterFormViewComponent, MediaItemFilterFormViewComponentInput, MediaItemFilterFormViewComponentOutput } from 'app/components/presentational/media-item/list/filter-form/view/media-item';

/**
 * Presentational component that contains all movie filter form input fields, all handled by the Formik container component
 */
export class MovieFilterFormViewComponent extends Component<MovieFilterFormViewComponentProps> {

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<MediaItemFilterFormViewComponent {...this.props} />
		);
	}
}

/**
 * MovieFilterFormViewComponent's input props
 */
export type MovieFilterFormViewComponentInput = MediaItemFilterFormViewComponentInput;

/**
 * MovieFilterFormViewComponent's output props
 */
export type MovieFilterFormViewComponentOutput = MediaItemFilterFormViewComponentOutput;

/**
 * All props of MovieFilterFormViewComponent
 */
export type MovieFilterFormViewComponentProps = FormikProps<FormikValues> & MovieFilterFormViewComponentInput & MovieFilterFormViewComponentOutput;
