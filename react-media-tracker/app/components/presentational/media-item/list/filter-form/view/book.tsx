import React, { Component, ReactNode } from 'react';
import { FormikProps, FormikValues } from 'formik';
import { MediaItemFilterFormViewComponent, MediaItemFilterFormViewComponentInput, MediaItemFilterFormViewComponentOutput } from 'app/components/presentational/media-item/list/filter-form/view/media-item';

/**
 * Presentational component that contains all book filter form input fields, all handled by the Formik container component
 */
export class BookFilterFormViewComponent extends Component<BookFilterFormViewComponentProps> {

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
 * BookFilterFormViewComponent's input props
 */
export type BookFilterFormViewComponentInput = MediaItemFilterFormViewComponentInput;

/**
 * BookFilterFormViewComponent's output props
 */
export type BookFilterFormViewComponentOutput = MediaItemFilterFormViewComponentOutput;

/**
 * All props of BookFilterFormViewComponent
 */
export type BookFilterFormViewComponentProps = FormikProps<FormikValues> & BookFilterFormViewComponentInput & BookFilterFormViewComponentOutput;
