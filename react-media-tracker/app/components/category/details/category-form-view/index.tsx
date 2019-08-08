import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';
import { FormikProps, FormikValues } from 'formik';
import { MEDIA_TYPES_INTERNAL } from 'app/models/internal/entities/category';
import { styles } from 'app/components/category/details/category-form-view/styles';
import { i18n } from 'app/lang/lang';
import { TextInputComponent } from 'app/components/form/text-input';
import { PickerInputComponent } from 'app/components/form/picker-input';
import { MediaIconBuilder } from 'app/components/category/common/category-icon/helper';
import { ColorPickerInputComponent } from 'app/components/form/color-picker-input';
import { config } from 'app/config/config';

/**
 * Presentational component that contains all category form input fields, all handled by the Formik container component
 */
export class CategoryFormViewComponent extends Component<CategoryFormViewComponentProps> {

	/**
	 * @override
	 */
	public componentDidMount(): void {

		this.handlePropChange();
	}

	/**
	 * @override
	 */
	public componentDidUpdate(prevProps: CategoryFormViewComponentProps): void {

		if(prevProps.isValid !== this.props.isValid || prevProps.saveRequested !== this.props.saveRequested) {
			
			this.handlePropChange();
		}
	}

	/**
	 * Helper to handle custom props at startup and after each update
	 */
	private handlePropChange(): void {

		const {
			saveRequested,
			notifyFormValidity,
			submitForm,
			isValid
		} = this.props;

		if(saveRequested) {

			submitForm();
		}
		else {

			notifyFormValidity(isValid);
		}
	}

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<View style={styles.container}>
				{this.nameField()}
				{this.mediaTypeField()}
				{this.colorField()}
			</View>
		);
	}

	/**
	 * Helper
	 * @returns the name component
	 */
	private nameField(): ReactNode {

		return (
			<TextInputComponent
				name='name'
				placeholder={i18n.t('category.details.placeholders.name')}
				icon={require('app/resources/images/ic_name.png')}
			/>
		);
	}

	/**
	 * Helper
	 * @returns the media type component
	 */
	private mediaTypeField(): ReactNode {

		const items = MEDIA_TYPES_INTERNAL.map((mediaType) => {
			return {
				value: mediaType,
				label: i18n.t(`category.mediaTypes.${mediaType}`),
				icon: MediaIconBuilder.getMediaIconFromType(mediaType)
			};
		});

		return (
			<PickerInputComponent
				name='mediaType'
				prompt={i18n.t('category.details.prompts.mediaType')}
				items={items}
			/>
		);
	}

	/**
	 * Helper
	 * @returns the color component
	 */
	private colorField(): ReactNode {

		return (
			<ColorPickerInputComponent
				name='color'
				icon={require('app/resources/images/ic_color.png')}
				colors={config.ui.colors.availableCategoryColors}
			/>
		);
	}
}

/**
 * CategoryFormViewComponent's input props
 */
export type CategoryFormViewComponentInput = {

	/**
	 * If an external component requests the form submission. Triggers form validation and, if OK, its submission.
	 */
	saveRequested: boolean;
}

/**
 * CategoryFormViewComponent's output props
 */
export type CategoryFormViewComponentOutput = {

	/**
	 * Callback to notify the current validity status of the form. Invoked at every Formik re-render.
	 * @param valid true if the form is valid, e.g. can be saved
	 */
	notifyFormValidity: (valid: boolean) => void;
}

/**
 * All props of CategoryFormViewComponent
 */
export type CategoryFormViewComponentProps = FormikProps<FormikValues> & CategoryFormViewComponentInput & CategoryFormViewComponentOutput;
