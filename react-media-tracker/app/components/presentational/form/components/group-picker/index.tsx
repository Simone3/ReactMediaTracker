import React, { ReactNode, Component } from 'react';
import { i18n } from 'app/utilities/i18n';
import { MediaItemGroupInternal } from 'app/data/models/internal/media-items/media-item';
import { FormInputComponentInput, FormInputComponentOutput } from 'app/components/presentational/form/components/generic';
import { GroupInternal } from 'app/data/models/internal/group';
import { GenericEntityPickerComponent, GenericEntityPickerComponentLabels, EntityDescriptor } from 'app/components/presentational/form/helpers/entity-picker';
import { images } from 'app/utilities/images';
import { NumericTextInputComponent } from 'app/components/presentational/form/components/text-input-number';

/**
 * Presentational component to display a media item group picker
 */
export class GroupPickerComponent extends Component<GroupPickerComponentProps, GroupPickerComponentState> {
	
	public state: GroupPickerComponentState = {
		currentTemporaryOrder: undefined
	};

	private labels: GenericEntityPickerComponentLabels<GroupInternal> = {
		optionNone: i18n.t('group.picker.options.none'),
		pickerPrompt: i18n.t('group.picker.prompt'),
		addButton: i18n.t('group.actions.add'),
		editButton: i18n.t('group.actions.edit'),
		deleteButton: i18n.t('group.actions.delete'),
		deleteConfirmTitle: i18n.t('group.common.alert.delete.title'),
		deleteConfirmMessage: (group) => {
			return i18n.t('group.common.alert.delete.message', { name: group.name });
		}
	};
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			groups,
			currentGroup,
			fetchGroups,
			loadNewGroupDetails,
			loadGroupDetails,
			deleteGroup
		} = this.props;

		return (
			<GenericEntityPickerComponent<GroupInternal>
				{...this.props}
				entities={groups}
				currentEntity={currentGroup ? currentGroup.groupData : undefined}
				labels={this.labels}
				modalIcon={images.groupField()}
				extraModalFields={this.renderModalOrderInput()}
				fetchEntities={fetchGroups}
				loadNewEntityDetails={loadNewGroupDetails}
				loadEntityDetails={loadGroupDetails}
				deleteEntity={deleteGroup}
				onConfirmEntity={this.onConfirmGroup.bind(this)}
				checkValidity={this.checkValidity.bind(this)}
				getInputDisplay={this.getInputDisplay.bind(this)}
				getEntityValues={this.getEntityValues.bind(this)}
				onLoadFirstTemporaryValues={this.onLoadFirstTemporaryValues.bind(this)}
			/>
		);
	}

	/**
	 * Helper to render the modal order in group input
	 * @returns the component
	 */
	private renderModalOrderInput(): ReactNode {

		const {
			currentTemporaryOrder
		} = this.state;

		// Selection callback
		const onValueChange = (order: number | undefined): void => {

			this.setState({
				currentTemporaryOrder: order
			});
		};

		return (
			<NumericTextInputComponent
				currentValue={currentTemporaryOrder}
				onValueChange={onValueChange}
				placeholder={i18n.t('group.order.placeholder')}
				status='DEFAULT'
				onBlur={() => {
					// Do nothing for now
				}}
				onFocus={() => {
					// Do nothing for now
				}}
			/>
		);
	}
	
	private onLoadFirstTemporaryValues(): void {
		
		const {
			currentGroup
		} = this.props;

		this.setState({
			currentTemporaryOrder: currentGroup ? currentGroup.orderInGroup : undefined
		});
	}

	private onConfirmGroup(group: GroupInternal | undefined): void {
		
		const {
			onSelectGroup
		} = this.props;
		
		const {
			currentTemporaryOrder
		} = this.state;

		if(group && currentTemporaryOrder) {

			// Callback with the selected group
			onSelectGroup({
				groupData: group,
				orderInGroup: currentTemporaryOrder
			});
		}
		else {

			// Callback with empty group
			onSelectGroup(undefined);
		}
	}

	private checkValidity(currentTemporaryGroup: GroupInternal | undefined): boolean {

		const {
			currentTemporaryOrder
		} = this.state;

		return Boolean((currentTemporaryGroup && currentTemporaryOrder) || (!currentTemporaryGroup && !currentTemporaryOrder));
	}

	private getInputDisplay(): string {
		
		const {
			currentGroup
		} = this.props;
		
		return currentGroup ? `${i18n.t(`mediaItem.list.group`, { order: currentGroup.orderInGroup, groupName: currentGroup.groupData.name })}` : '';
	}

	private getEntityValues(group: GroupInternal): EntityDescriptor {
		
		return group;
	}
}

/**
 * GroupPickerComponent's input props
 */
export type GroupPickerComponentInput = FormInputComponentInput & {

	/**
	 * The list of all available groups
	 */
	groups: GroupInternal[];

	/**
	 * The current input values
	 */
	currentGroup: MediaItemGroupInternal | undefined;

	/**
	 * The text placeholder
	 */
	placeholder: string;

	/**
	 * Flag to tell if the groups list requires a fetch. If so, on startup or on update the component will invoke the fetch callback.
	 */
	requiresFetch: boolean;

	/**
	 * Flag to tell if the groups list is currently being fetched
	 */
	fetching: boolean;
}

/**
 * GroupPickerComponent's output props
 */
export type GroupPickerComponentOutput = FormInputComponentOutput & {

	/**
	 * Notifies input value change
	 */
	onSelectGroup: (group: MediaItemGroupInternal | undefined) => void;

	/**
	 * Callback to request the groups list (re)load
	 */
	fetchGroups: () => void;

	/**
	 * Callback to load a new group details before navigating to the group form
	 */
	loadNewGroupDetails: () => void;

	/**
	 * Callback to load an existing group details before navigating to the group form
	 */
	loadGroupDetails: (group: GroupInternal) => void;
	
	/**
	 * Callback to delete a group
	 */
	deleteGroup: (group: GroupInternal) => void;
}

/**
 * GroupPickerComponent's props
 */
export type GroupPickerComponentProps = GroupPickerComponentInput & GroupPickerComponentOutput;

/**
 * GroupPickerComponent's state
 */
type GroupPickerComponentState = {

	/**
	 * The currently inserted order, to be confirmed by the user
	 */
	currentTemporaryOrder: number | undefined;
}
