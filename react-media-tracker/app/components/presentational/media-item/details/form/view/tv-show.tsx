import React, { Component, ReactNode } from 'react';
import { FormikProps } from 'formik';
import { MediaItemFormViewComponent, MediaItemFormViewComponentCommonInput, MediaItemFormViewComponentCommonOutput } from 'app/components/presentational/media-item/details/form/view/media-item';
import { TvShowInternal } from 'app/data/models/internal/media-items/tv-show';

/**
 * Presentational component that contains all TV show form input fields, all handled by the Formik container component
 */
export class TvShowFormViewComponent extends Component<TvShowFormViewComponentProps> {

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
 * TvShowFormViewComponent's input props
 */
export type TvShowFormViewComponentInput = MediaItemFormViewComponentCommonInput;

/**
 * TvShowFormViewComponent's output props
 */
export type TvShowFormViewComponentOutput = MediaItemFormViewComponentCommonOutput;

/**
 * All props of TvShowFormViewComponent
 */
export type TvShowFormViewComponentProps = FormikProps<TvShowInternal> & TvShowFormViewComponentInput & TvShowFormViewComponentOutput;
