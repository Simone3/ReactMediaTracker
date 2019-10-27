import React, { Component, ReactNode } from 'react';
import { Formik, FormikProps } from 'formik';
import { MovieFormViewComponent } from 'app/components/presentational/media-item/details/form/view/movie';
import { MovieInternal, DEFAULT_CATALOG_MOVIE, CatalogMovieInternal } from 'app/data/models/internal/media-items/movie';
import { MediaItemFormComponentInput, MediaItemFormComponentOutput } from 'app/components/presentational/media-item/details/form/wrapper/media-item';
import { movieFormValidationSchema } from 'app/components/presentational/media-item/details/form/data/movie';
import { ConfirmAlert } from 'app/components/presentational/generic/confirm-alert';
import { i18n } from 'app/utilities/i18n';

/**
 * Presentational component that handles the Formik wrapper component for the movie form
 */
export class MovieFormComponent extends Component<MovieFormComponentProps> {

	private formikProps?: FormikProps<MovieInternal>;
	private loadingCatalog = false;

	/**
	 * @override
	 */
	public componentDidUpdate(): void {

		// If we have new catalog details...
		if(this.props.loadCatalogDetails && this.formikProps && !this.loadingCatalog) {

			this.loadingCatalog = true;

			const catalogDetails = this.props.loadCatalogDetails as CatalogMovieInternal;
			
			// Reload EVERY catalog field (even if the current object has an undefined/null value)
			const values: MovieInternal = {
				...this.formikProps.values,
				...DEFAULT_CATALOG_MOVIE,
				...catalogDetails
			};
			this.formikProps.setValues(values);

			// Notify catalog details load completion
			this.props.onCatalogDetailsLoaded();

			this.loadingCatalog = false;
		}

		// If we need to ask for same-name confirmation...
		if(this.props.sameNameConfirmationRequested) {

			const title = i18n.t('mediaItem.common.alert.addSameName.title');
			const message = i18n.t('mediaItem.common.alert.addSameName.message.MOVIE');
			ConfirmAlert.alert(title, message, () => {

				if(this.formikProps) {

					this.props.saveMediaItem(this.formikProps.values, true);
				}
			});
		}
	}

	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<Formik<MovieInternal>
				onSubmit={(result) => {
					this.props.saveMediaItem(result, false);
				}}
				initialValues={this.props.initialValues}
				validationSchema={movieFormValidationSchema}>
				{(formikProps: FormikProps<MovieInternal>) => {

					this.formikProps = formikProps;

					return (
						<MovieFormViewComponent
							{...formikProps}
							saveRequested={this.props.saveRequested}
							notifyFormStatus={this.props.notifyFormStatus}
						/>
					);
				}}
			</Formik>
		);
	}
}

/**
 * MovieFormComponent's input props
 */
export type MovieFormComponentInput = MediaItemFormComponentInput;

/**
 * MovieFormComponent's output props
 */
export type MovieFormComponentOutput = MediaItemFormComponentOutput;

/**
 * MovieFormComponent's props
 */
export type MovieFormComponentProps = MovieFormComponentInput & MovieFormComponentOutput;
