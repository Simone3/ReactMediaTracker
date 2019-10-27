import React, { Component, ReactNode } from 'react';
import { MediaItemInternal, CatalogMediaItemInternal } from 'app/data/models/internal/media-items/media-item';
import { MediaItemFormComponentInput, MediaItemFormComponentOutput } from 'app/components/presentational/media-item/details/form/wrapper';
import { i18n } from 'app/utilities/i18n';
import { ConfirmAlert } from 'app/components/presentational/generic/confirm-alert';
import { FormikProps, Formik } from 'formik';
import { ObjectSchema } from 'yup';

/**
 * Presentational component that handles the Formik wrapper component for the generic media item form
 */
export class CommonMediaItemFormComponent extends Component<CommonMediaItemFormComponentProps> {
	
	private formikProps?: FormikProps<MediaItemInternal>;
	private loadingCatalog = false;

	/**
	 * @override
	 */
	public componentDidUpdate(): void {

		const {
			loadCatalogDetails,
			onCatalogDetailsLoaded,
			sameNameConfirmationRequested,
			saveMediaItem,
			defaultCatalogItem
		} = this.props;

		// If we have new catalog details...
		if(loadCatalogDetails && this.formikProps && !this.loadingCatalog) {

			this.loadingCatalog = true;

			const catalogDetails = loadCatalogDetails;
			
			// Reload EVERY catalog field (even if the current object has an undefined/null value)
			const values: MediaItemInternal = {
				...this.formikProps.values,
				...defaultCatalogItem,
				...catalogDetails
			};
			this.formikProps.setValues(values);

			// Notify catalog details load completion
			onCatalogDetailsLoaded();

			this.loadingCatalog = false;
		}

		// If we need to ask for same-name confirmation...
		if(sameNameConfirmationRequested && this.formikProps) {

			const title = i18n.t('mediaItem.common.alert.addSameName.title');
			const message = i18n.t(`mediaItem.common.alert.addSameName.message.${this.formikProps.values.mediaType}`);
			ConfirmAlert.alert(title, message, () => {

				if(this.formikProps) {

					saveMediaItem(this.formikProps.values, true);
				}
			});
		}
	}

	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			saveMediaItem,
			initialValues,
			children,
			validationSchema
		} = this.props;

		return (
			<Formik<MediaItemInternal>
				onSubmit={(result) => {
					saveMediaItem(result, false);
				}}
				initialValues={initialValues}
				validationSchema={validationSchema}>
				{(formikProps: FormikProps<MediaItemInternal>) => {

					this.formikProps = formikProps;
					return children(formikProps);
				}}
			</Formik>
		);
	}
}

/**
 * CommonMediaItemFormComponent's input props
 */
export type CommonMediaItemFormComponentInput = MediaItemFormComponentInput & {

	/**
	 * @override
	 */
	children: (props: FormikProps<MediaItemInternal>) => ReactNode;

	/**
	 * The default empty catalog media item
	 */
	defaultCatalogItem: CatalogMediaItemInternal;

	/**
	 * The media item form validation schema
	 */
	validationSchema: ObjectSchema<MediaItemInternal>;
}

/**
 * CommonMediaItemFormComponent's output props
 */
export type CommonMediaItemFormComponentOutput = MediaItemFormComponentOutput;

/**
 * CommonMediaItemFormComponent's props
 */
export type CommonMediaItemFormComponentProps = CommonMediaItemFormComponentInput & CommonMediaItemFormComponentOutput;
