import React, { Component, ReactNode } from 'react';
import { FormikProps } from 'formik';
import { VideogameFormViewComponent } from 'app/components/presentational/media-item/details/form/view/videogame';
import { VideogameInternal, DEFAULT_CATALOG_VIDEOGAME } from 'app/data/models/internal/media-items/videogame';
import { CommonMediaItemFormComponent } from 'app/components/presentational/media-item/details/form/wrapper/media-item';
import { MediaItemFormComponentInput, MediaItemFormComponentOutput } from 'app/components/presentational/media-item/details/form/wrapper';
import { videogameFormValidationSchema } from 'app/components/presentational/media-item/details/form/data/videogame';

/**
 * Presentational component that handles the Formik wrapper component for the videogame form
 */
export class VideogameFormComponent extends Component<VideogameFormComponentProps> {

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
				defaultCatalogItem={DEFAULT_CATALOG_VIDEOGAME}
				validationSchema={videogameFormValidationSchema}>
				{(formikProps: FormikProps<VideogameInternal>) => {

					return (
						<VideogameFormViewComponent
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
 * VideogameFormComponent's input props
 */
export type VideogameFormComponentInput = MediaItemFormComponentInput;

/**
 * VideogameFormComponent's output props
 */
export type VideogameFormComponentOutput = MediaItemFormComponentOutput;

/**
 * VideogameFormComponent's props
 */
export type VideogameFormComponentProps = VideogameFormComponentInput & VideogameFormComponentOutput;
