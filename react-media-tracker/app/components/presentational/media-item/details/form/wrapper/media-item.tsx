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
	private loadedCatalogId?: string;

	/**
	 * @override
	 */
	public componentDidUpdate(): void {

		// Check if we need to perform some operations during this render
		this.checkLoadCatalogDetails();
		this.checkLoadSelectedGroup();
		this.checkLoadSelectedOwnPlatform();
		this.checkAskSameNameConfirmation();
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
				validationSchema={validationSchema}
				validateOnMount={true}>
				{(formikProps: FormikProps<MediaItemInternal>) => {

					this.formikProps = formikProps;
					return children(formikProps);
				}}
			</Formik>
		);
	}

	/**
	 * Checks if we need to (re)load the catalog details, after they have been fetched
	 */
	private checkLoadCatalogDetails(): void {

		const {
			loadCatalogDetails,
			defaultCatalogItem
		} = this.props;
		
		// If we have new catalog details...
		if(this.formikProps && loadCatalogDetails && loadCatalogDetails.catalogLoadId && loadCatalogDetails.catalogLoadId !== this.loadedCatalogId) {
			
			this.loadedCatalogId = loadCatalogDetails.catalogLoadId;

			// Reload EVERY catalog field (even if the current object has an undefined/null value)
			const values: MediaItemInternal = {
				...this.formikProps.values,
				...defaultCatalogItem,
				...loadCatalogDetails
			};

			this.formikProps.setValues(values);
		}
	}

	/**
	 * Checks if we need to set the current group, selected from another screen
	 */
	private checkLoadSelectedGroup(): void {

		const {
			selectedGroup
		} = this.props;

		if(this.formikProps && selectedGroup?.id !== this.formikProps.values.group?.id) {

			const values: MediaItemInternal = {
				...this.formikProps.values,
				group: selectedGroup
			};

			if(!selectedGroup) {

				values.orderInGroup = undefined;
			}

			this.formikProps.setValues(values);
		}
	}

	/**
	 * Checks if we need to set the current own platform, selected from another screen
	 */
	private checkLoadSelectedOwnPlatform(): void {

		const {
			selectedOwnPlatform
		} = this.props;

		if(this.formikProps && selectedOwnPlatform?.id !== this.formikProps.values.ownPlatform?.id) {

			const values: MediaItemInternal = {
				...this.formikProps.values,
				ownPlatform: selectedOwnPlatform
			};

			this.formikProps.setValues(values);
		}
	}

	/**
	 * Checks if wee need to ask for same-name confirmation
	 */
	private checkAskSameNameConfirmation(): void {

		const {
			sameNameConfirmationRequested,
			saveMediaItem
		} = this.props;

		if(this.formikProps && sameNameConfirmationRequested) {

			const title = i18n.t('mediaItem.common.alert.addSameName.title');
			const message = i18n.t(`mediaItem.common.alert.addSameName.message.${this.formikProps.values.mediaType}`);
			ConfirmAlert.alert(title, message, () => {

				if(this.formikProps) {

					saveMediaItem(this.formikProps.values, true);
				}
			});
		}
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
