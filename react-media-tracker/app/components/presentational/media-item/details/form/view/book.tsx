import React, { Component, ReactNode } from 'react';
import { FormikProps } from 'formik';
import { MediaItemFormViewComponent, MediaItemFormViewComponentCommonInput, MediaItemFormViewComponentCommonOutput } from 'app/components/presentational/media-item/details/form/view/media-item';
import { BookInternal } from 'app/data/models/internal/media-items/book';

/**
 * Presentational component that contains all book form input fields, all handled by the Formik container component
 */
export class BookFormViewComponent extends Component<BookFormViewComponentProps> {

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
 * BookFormViewComponent's input props
 */
export type BookFormViewComponentInput = MediaItemFormViewComponentCommonInput;

/**
 * BookFormViewComponent's output props
 */
export type BookFormViewComponentOutput = MediaItemFormViewComponentCommonOutput;

/**
 * All props of BookFormViewComponent
 */
export type BookFormViewComponentProps = FormikProps<BookInternal> & BookFormViewComponentInput & BookFormViewComponentOutput;
