import React, { Component, ReactNode } from 'react';
import { FormikProps } from 'formik';
import { TvShowFormViewComponent } from 'app/components/presentational/media-item/details/form/view/tv-show';
import { TvShowInternal, DEFAULT_CATALOG_TV_SHOW } from 'app/data/models/internal/media-items/tv-show';
import { CommonMediaItemFormComponent } from 'app/components/presentational/media-item/details/form/wrapper/media-item';
import { MediaItemFormComponentInput, MediaItemFormComponentOutput } from 'app/components/presentational/media-item/details/form/wrapper';
import { tvShowFormValidationSchema } from 'app/components/presentational/media-item/details/form/data/tv-show';

/**
 * Presentational component that handles the Formik wrapper component for the TV show form
 */
export class TvShowFormComponent extends Component<TvShowFormComponentProps> {

	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			saveRequested,
			notifyFormStatus
		} = this.props;

		return (
			<CommonMediaItemFormComponent
				{...this.props}
				defaultCatalogItem={DEFAULT_CATALOG_TV_SHOW}
				validationSchema={tvShowFormValidationSchema}>
				{(formikProps: FormikProps<TvShowInternal>) => {

					return (
						<TvShowFormViewComponent
							{...formikProps}
							saveRequested={saveRequested}
							notifyFormStatus={notifyFormStatus}
						/>
					);
				}}
			</CommonMediaItemFormComponent>
		);
	}
}

/**
 * TvShowFormComponent's input props
 */
export type TvShowFormComponentInput = MediaItemFormComponentInput;

/**
 * TvShowFormComponent's output props
 */
export type TvShowFormComponentOutput = MediaItemFormComponentOutput;

/**
 * TvShowFormComponent's props
 */
export type TvShowFormComponentProps = TvShowFormComponentInput & TvShowFormComponentOutput;
