import React, { Component, ReactNode } from 'react';
import { View, ScrollView } from 'react-native';
import { FormikProps, FormikValues } from 'formik';
import { styles } from 'app/components/presentational/media-item/details/form/view/styles';
import { i18n } from 'app/utilities/i18n';
import { images } from 'app/utilities/images';
import { TextInputFieldComponent } from 'app/components/presentational/form/fields/text-input';
import { MEDIA_ITEM_IMPORTANCE_INTERNAL_VALUES } from 'app/data/models/internal/media-items/media-item';
import { PickerFieldComponent } from 'app/components/presentational/form/fields/picker';
import { MediaItemFormNameFieldContainer } from 'app/components/containers/media-item/details/form-name-field';
import { DatePickerFieldComponent } from 'app/components/presentational/form/fields/date-picker';
import { MultiTextInputFieldComponent } from 'app/components/presentational/form/fields/text-input-multiple';
import { GroupPickerFieldContainer } from 'app/components/containers/media-item/details/group-picker';

/**
 * Presentational component that contains all generic media item form input fields, all handled by the Formik container component
 */
export class MediaItemFormViewComponent extends Component<MediaItemFormViewComponentProps> {

	/**
	 * @override
	 */
	public componentDidMount(): void {

		this.handlePropChange();
	}

	/**
	 * @override
	 */
	public componentDidUpdate(prevProps: MediaItemFormViewComponentProps): void {
		
		const validChanged = prevProps.isValid !== this.props.isValid;
		const dirtyChanged = prevProps.dirty !== this.props.dirty;
		const saveReqChanged = prevProps.saveRequested !== this.props.saveRequested;
		if(validChanged || dirtyChanged || saveReqChanged) {
			
			this.handlePropChange();
		}
	}

	/**
	 * Helper to handle custom props at startup and after each update
	 */
	private handlePropChange(): void {

		const {
			saveRequested,
			notifyFormStatus,
			submitForm,
			isValid,
			dirty
		} = this.props;

		if(saveRequested) {

			submitForm();
		}
		else {

			notifyFormStatus(isValid, dirty);
		}
	}

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<ScrollView style={styles.container}>
				<View style={styles.content}>
					{this.nameField()}
					{this.descriptionField()}
					{this.importanceField()}
					{this.releaseDate()}
					{this.userCommentField()}
					{this.genresField()}
					{this.groupField()}
					{this.props.children}
				</View>
			</ScrollView>
		);
	}

	/**
	 * Helper
	 * @returns the name component
	 */
	private nameField(): ReactNode {

		return (
			<MediaItemFormNameFieldContainer
				name='name'
				placeholder={i18n.t('mediaItem.details.placeholders.name')}
				icon={images.nameField()}
			/>
		);
	}

	/**
	 * Helper
	 * @returns the description component
	 */
	private descriptionField(): ReactNode {

		return (
			<TextInputFieldComponent
				name='description'
				placeholder={i18n.t('mediaItem.details.placeholders.description')}
				icon={images.descriptionField()}
			/>
		);
	}

	/**
	 * Helper
	 * @returns the importance component
	 */
	private importanceField(): ReactNode {

		const items = MEDIA_ITEM_IMPORTANCE_INTERNAL_VALUES.map((importance) => {
			return {
				value: importance,
				label: i18n.t(`mediaItem.common.importance.${importance}`),
				icon: images.mediaItemImportance(importance).source
			};
		});

		return (
			<PickerFieldComponent
				name='importance'
				prompt={i18n.t('mediaItem.details.prompts.importance')}
				items={items}
			/>
		);
	}

	/**
	 * Helper
	 * @returns the release date component
	 */
	private releaseDate(): ReactNode {

		return (
			<DatePickerFieldComponent
				name='releaseDate'
				icon={images.releaseDateField()}
				placeholder={i18n.t('mediaItem.details.placeholders.releaseDate')}
			/>
		);
	}

	/**
	 * Helper
	 * @returns the user comment component
	 */
	private userCommentField(): ReactNode {

		return (
			<TextInputFieldComponent
				name='userComment'
				placeholder={i18n.t('mediaItem.details.placeholders.userComment')}
				icon={images.userCommentField()}
			/>
		);
	}

	/**
	 * Helper
	 * @returns the genres component
	 */
	private genresField(): ReactNode {

		return (
			<MultiTextInputFieldComponent
				name='genres'
				placeholder={i18n.t('mediaItem.details.placeholders.genres')}
				icon={images.genresField()}
			/>
		);
	}

	/**
	 * Helper
	 * @returns the group component
	 */
	private groupField(): ReactNode {

		return (
			<GroupPickerFieldContainer
				name='group'
				placeholder={i18n.t('mediaItem.details.placeholders.group')}
				icon={images.groupField()}
			/>
		);
	}
}

/**
 * MediaItemFormViewComponent's input props
 */
export type MediaItemFormViewComponentInput = {

	/**
	 * If an external component requests the form submission. Triggers form validation and, if OK, its submission.
	 */
	saveRequested: boolean;
}

/**
 * MediaItemFormViewComponent's output props
 */
export type MediaItemFormViewComponentOutput = {

	/**
	 * Callback to notify the current status of the form
	 * @param valid true if the form is valid, i.e. no validation error occurred
	 * @param dirty true if the form is dirty, i.e. one or more fields are different from initial values
	 */
	notifyFormStatus: (valid: boolean, dirty: boolean) => void;
}

/**
 * All props of MediaItemFormViewComponent
 */
export type MediaItemFormViewComponentProps = FormikProps<FormikValues> & MediaItemFormViewComponentInput & MediaItemFormViewComponentOutput;
