import React, { ReactNode, Component } from 'react';
import { i18n } from 'app/utilities/i18n';
import { FormInputComponentInput, FormInputComponentOutput } from 'app/components/presentational/form/components/generic';
import { OwnPlatformInternal } from 'app/data/models/internal/own-platform';
import { GenericEntityPickerComponent, GenericEntityPickerComponentLabels, EntityDescriptor } from 'app/components/presentational/form/helpers/entity-picker';
import { AppScreens } from 'app/utilities/screens';
import { images } from 'app/utilities/images';

/**
 * Presentational component to display a media item own platform picker
 */
export class OwnPlatformPickerComponent extends Component<OwnPlatformPickerComponentProps> {
	
	private labels: GenericEntityPickerComponentLabels<OwnPlatformInternal> = {
		optionNone: i18n.t('ownPlatform.picker.options.none'),
		pickerPrompt: i18n.t('ownPlatform.picker.prompt'),
		addButton: i18n.t('ownPlatform.actions.add'),
		editButton: i18n.t('ownPlatform.actions.edit'),
		deleteButton: i18n.t('ownPlatform.actions.delete'),
		deleteConfirmTitle: i18n.t('ownPlatform.common.alert.delete.title'),
		deleteConfirmMessage: (ownPlatform) => {
			return i18n.t('ownPlatform.common.alert.delete.message', { name: ownPlatform.name });
		}
	};
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			ownPlatforms,
			currentOwnPlatform,
			fetchOwnPlatforms,
			loadNewOwnPlatformDetails,
			loadOwnPlatformDetails,
			deleteOwnPlatform
		} = this.props;

		return (
			<GenericEntityPickerComponent<OwnPlatformInternal>
				{...this.props}
				entities={ownPlatforms}
				currentEntity={currentOwnPlatform}
				entityDetailsScreenName={AppScreens.OwnPlatformDetails}
				labels={this.labels}
				modalIcon={images.ownPlatformField()}
				fetchEntities={fetchOwnPlatforms}
				loadNewEntityDetails={loadNewOwnPlatformDetails}
				loadEntityDetails={loadOwnPlatformDetails}
				deleteEntity={deleteOwnPlatform}
				onConfirmEntity={this.onConfirmOwnPlatform.bind(this)}
				checkValidity={this.checkValidity.bind(this)}
				getInputDisplay={this.getInputDisplay.bind(this)}
				getEntityValues={this.getEntityValues.bind(this)}
			/>
		);
	}

	private onConfirmOwnPlatform(ownPlatform: OwnPlatformInternal | undefined): void {
		
		const {
			onSelectOwnPlatform
		} = this.props;

		onSelectOwnPlatform(ownPlatform);
	}

	private checkValidity(): boolean {

		return true;
	}

	private getInputDisplay(currentOwnPlatform: OwnPlatformInternal | undefined): string {
		
		return currentOwnPlatform ? currentOwnPlatform.name : '';
	}

	private getEntityValues(ownPlatform: OwnPlatformInternal): EntityDescriptor {
		
		return ownPlatform;
	}
}

/**
 * OwnPlatformPickerComponent's input props
 */
export type OwnPlatformPickerComponentInput = FormInputComponentInput & {

	/**
	 * The list of all available own platforms
	 */
	ownPlatforms: OwnPlatformInternal[];

	/**
	 * The current input values
	 */
	currentOwnPlatform: OwnPlatformInternal | undefined;

	/**
	 * The text placeholder
	 */
	placeholder: string;

	/**
	 * Flag to tell if the own platforms list requires a fetch. If so, on startup or on update the component will invoke the fetch callback.
	 */
	requiresFetch: boolean;
}

/**
 * OwnPlatformPickerComponent's output props
 */
export type OwnPlatformPickerComponentOutput = FormInputComponentOutput & {

	/**
	 * Notifies input value change
	 */
	onSelectOwnPlatform: (ownPlatform: OwnPlatformInternal | undefined) => void;

	/**
	 * Callback to request the own platforms list (re)load
	 */
	fetchOwnPlatforms: () => void;

	/**
	 * Callback to load a new own platform details before navigating to the own platform form
	 */
	loadNewOwnPlatformDetails: () => void;

	/**
	 * Callback to load an existing own platform details before navigating to the own platform form
	 */
	loadOwnPlatformDetails: (ownPlatform: OwnPlatformInternal) => void;
	
	/**
	 * Callback to delete a own platform
	 */
	deleteOwnPlatform: (ownPlatform: OwnPlatformInternal) => void;
}

/**
 * OwnPlatformPickerComponent's props
 */
export type OwnPlatformPickerComponentProps = OwnPlatformPickerComponentInput & OwnPlatformPickerComponentOutput;
