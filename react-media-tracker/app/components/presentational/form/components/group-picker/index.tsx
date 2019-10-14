import { styles } from 'app/components/presentational/form/components/group-picker/styles';
import React, { ReactNode, Component } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { ModalComponent } from 'app/components/presentational/generic/modal';
import { i18n } from 'app/utilities/i18n';
import { MediaItemGroupInternal } from 'app/data/models/internal/media-items/media-item';
import { FormInputComponent, FormInputComponentInput, FormInputComponentOutput } from 'app/components/presentational/form/components/generic';
import { GroupInternal } from 'app/data/models/internal/group';
import { PickerComponent, PickerComponentItem } from 'app/components/presentational/form/components/picker';
import { AppError } from 'app/data/models/internal/error';
import { TextInputComponent } from 'app/components/presentational/form/components/text-input';
import { ColoredImage } from 'app/components/presentational/generic/colored-image';
import { images } from 'app/utilities/images';
import { config } from 'app/config/config';
import { ButtonsListComponent, ButtonsListComponentButton } from 'app/components/presentational/generic/buttons-list';
import { navigationService } from 'app/utilities/navigation-service';
import { AppScreens } from 'app/utilities/screens';
import { ConfirmAlert } from 'app/components/presentational/generic/confirm-alert';
import { ModalInputConfirmComponent } from 'app/components/presentational/form/helpers/modal-confirm';

/**
 * Presentational component to display a media item group picker
 */
export class GroupPickerComponent extends Component<GroupPickerComponentProps, GroupPickerComponentState> {
	
	public state: GroupPickerComponentState = {
		mainModalOpen: false,
		groupActionModalOpen: false,
		currentTemporaryGroupId: undefined,
		currentTemporaryOrder: undefined
	};

	/**
	 * @override
	 */
	public componentDidMount(): void {

		this.requestFetchIfRequired();
	}

	/**
	 * @override
	 */
	public componentDidUpdate(): void {

		this.requestFetchIfRequired();
	}
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<FormInputComponent {...this.props}>
				{this.renderInput()}
				{this.renderMainModal()}
				{this.renderGroupActionModal()}
			</FormInputComponent>
		);
	}

	/**
	 * Helper to invoke the fetch callback if the modal is open and the input fetch flag is true
	 */
	private requestFetchIfRequired(): void {
		
		if(this.state.mainModalOpen && this.props.requiresFetch) {

			this.props.fetchGroups();
		}
	}

	/**
	 * Helper to render the visibile form field
	 * @returns the component
	 */
	private renderInput(): ReactNode {

		const {
			placeholder,
			onFocus,
			currentGroup
		} = this.props;

		const textValue = currentGroup ? `${i18n.t(`mediaItem.list.group`, { order: currentGroup.orderInGroup, groupName: currentGroup.groupData.name })}` : '';

		return (
			<TouchableOpacity
				style={styles.inputContainer}
				onPress={(event) => {

					// Open the modal and set the temporary data state
					this.setState({
						mainModalOpen: true,
						currentTemporaryGroupId: this.props.currentGroup ? this.props.currentGroup.groupData.id : undefined,
						currentTemporaryOrder: this.props.currentGroup ? this.props.currentGroup.orderInGroup : undefined
					});
					onFocus(event);
				}}>
				<TextInput
					style={styles.input}
					editable={false}
					value={textValue}
					placeholder={placeholder}
				/>
			</TouchableOpacity>
		);
	}

	/**
	 * Helper to render the main modal
	 * @returns the component
	 */
	private renderMainModal(): ReactNode {

		const {
			onBlur
		} = this.props;

		const {
			mainModalOpen
		} = this.state;

		return (
			<ModalComponent
				visible={mainModalOpen}
				onClose={() => {

					onBlur('');
					this.setState({ mainModalOpen: false });
				}}>
				<View style={ styles.modalContent } key='group-screen-1'>
					<View style={styles.modalInputsContainer}>
						<View style={styles.modalPickerContainer}>
							{this.renderModalPicker()}
							{this.renderModalActionButton()}
						</View>
						{this.renderModalOrderInput()}
					</View>
					{this.renderModalConfirmButton()}
				</View>
			</ModalComponent>
		);
	}
	
	/**
	 * Helper to render the modal group picker
	 * @returns the component
	 */
	private renderModalPicker(): ReactNode {

		const {
			groups
		} = this.props;

		const {
			currentTemporaryGroupId
		} = this.state;

		// Options
		const items: PickerComponentItem[] = [{
			value: undefined,
			label: i18n.t('group.picker.options.none')
		}];
		for(const group of groups) {

			items.push({
				value: group.id,
				label: group.name
			});
		}

		// Current selection
		const selectedItem = currentTemporaryGroupId;

		// Selection callback
		const onSelectGroup = (groupId: string | null | undefined): void => {

			this.setState({
				currentTemporaryGroupId: groupId ? groupId : undefined
			});
		};

		return (
			<View style={styles.modalPicker}>
				<PickerComponent
					currentItem={selectedItem}
					items={items}
					onSelectItem={onSelectGroup}
					prompt={i18n.t('group.picker.prompt')}
					status='DEFAULT'
					onBlur={() => {
						// Do nothing for now
					}}
					onFocus={() => {
						// Do nothing for now
					}}
				/>
			</View>
		);
	}

	/**
	 * Helper to render the button to show the extra group options
	 * @returns the component
	 */
	private renderModalActionButton(): ReactNode {

		return (
			<TouchableOpacity onPress={() => {
				this.setState({	groupActionModalOpen: true });
			}} style={styles.modalActionButton}>
				<ColoredImage
					source={images.menuButton()}
					tintColor={config.ui.colors.colorModalContent}
				/>
			</TouchableOpacity>
		);
	}
	
	/**
	 * Helper to render the modal order in group input
	 * @returns the component
	 */
	private renderModalOrderInput(): ReactNode {

		const {
			groups
		} = this.props;

		const {
			currentTemporaryOrder
		} = this.state;

		// Options
		const items: PickerComponentItem[] = [{
			value: undefined,
			label: i18n.t('group.picker.options.none')
		}];
		for(const group of groups) {

			items.push({
				value: group.id,
				label: group.name
			});
		}

		// Selection callback
		const onTextChange = (order: string): void => {

			this.setState({
				currentTemporaryOrder: order ? Number(order) : undefined
			});
		};

		return (
			<TextInputComponent
				currentText={currentTemporaryOrder ? String(currentTemporaryOrder) : undefined}
				onTextChange={onTextChange}
				keyboardType='number-pad'
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

	/**
	 * Helper to render the modal confirm button
	 * @returns the component
	 */
	private renderModalConfirmButton(): ReactNode {

		const {
			currentTemporaryGroupId,
			currentTemporaryOrder
		} = this.state;

		const {
			onBlur
		} = this.props;

		const valid = Boolean((currentTemporaryGroupId && currentTemporaryOrder) || (!currentTemporaryGroupId && !currentTemporaryOrder));

		return (
			<ModalInputConfirmComponent
				valid={valid}
				onConfirm={(event) => {

					// Confirm group to the main form
					this.confirmGroup(this.getCurrentlySelectedGroup(), currentTemporaryOrder);
					
					// Close modal
					onBlur(event);
					this.setState({ mainModalOpen: false });
				}}
			/>
		);
	}

	/**
	 * Helper to render the secondary modal with the group actions
	 * @returns the component
	 */
	private renderGroupActionModal(): ReactNode {

		const group = this.getCurrentlySelectedGroup();

		const addNewButton: ButtonsListComponentButton = {
			label: i18n.t('group.actions.add'),
			icon: images.addButton(),
			onClick: this.onAddNewGroup.bind(this)
		};

		const editButton: ButtonsListComponentButton = {
			label: i18n.t('group.actions.edit'),
			icon: images.editButton(),
			onClick: this.onEditGroup.bind(this),
			disabled: !group
		};

		const deleteButton: ButtonsListComponentButton = {
			label: i18n.t('group.actions.delete'),
			icon: images.deleteButton(),
			onClick: this.onGroupDelete.bind(this),
			disabled: !group
		};

		return (
			<ModalComponent
				visible={this.state.groupActionModalOpen}
				onClose={() => {
					this.setState({	groupActionModalOpen: false });
				}}
				horizontalPosition='center'
				verticalPosition='bottom'>
				<ButtonsListComponent
					title={i18n.t('group.picker.prompt')}
					titleIcon={images.groupField()}
					buttons={[ addNewButton, editButton, deleteButton ]}
				/>
			</ModalComponent>
		);
	}

	/**
	 * Retrieves the group data from the currently temporarily selected value, if any
	 * @returns the group data or undefined if no group is selected
	 */
	private getCurrentlySelectedGroup(): GroupInternal | undefined {

		const {
			groups
		} = this.props;

		const {
			currentTemporaryGroupId
		} = this.state;

		let group;
		if(currentTemporaryGroupId) {

			group = groups.find((value) => {
				return value.id === currentTemporaryGroupId;
			});
			if(!group) {

				throw AppError.GENERIC.withDetails(`Group ${currentTemporaryGroupId} was not found in the list`);
			}
		}

		return group;
	}

	/**
	 * Helper to "submit" the group value change to the main form
	 * @param group the grup to send
	 * @param order the order to send
	 */
	private confirmGroup(group: GroupInternal | undefined, order: number | undefined): void {

		const {
			onSelectGroup
		} = this.props;

		if(group && order) {

			// Callback with the selected group
			onSelectGroup({
				groupData: group,
				orderInGroup: order
			});
		}
		else {

			// Callback with empty group
			onSelectGroup(undefined);
		}
	}

	/**
	 * Callback for the add new group button
	 */
	private onAddNewGroup(): void {

		const {
			addNewGroup
		} = this.props;

		// Load empty group details and navigate to the group form
		addNewGroup();
		navigationService.navigate(AppScreens.GroupDetails);

		// Close all modals (for the future: see if there's a way to keep the main modal open)
		this.setState({
			mainModalOpen: false,
			groupActionModalOpen: false
		});
	}

	/**
	 * Callback for the edit group button
	 */
	private onEditGroup(): void {
		
		const {
			editGroup
		} = this.props;

		const group = this.getCurrentlySelectedGroup() as GroupInternal;

		// Load group details and navigate to the group form
		editGroup(group as GroupInternal);
		navigationService.navigate(AppScreens.GroupDetails);

		// Close all modals (for the future: see if there's a way to keep the main modal open)
		this.setState({
			mainModalOpen: false,
			groupActionModalOpen: false
		});
	}

	/**
	 * Callback for the delete group button
	 */
	private onGroupDelete(): void {
		
		const {
			deleteGroup,
			currentGroup
		} = this.props;

		const group = this.getCurrentlySelectedGroup() as GroupInternal;

		// Ask for confirmation
		const title = i18n.t('group.common.alert.delete.title');
		const message = i18n.t('group.common.alert.delete.message', { name: group.name });
		ConfirmAlert.alert(title, message, () => {
			
			// Delete the group
			deleteGroup(group);

			// Close action modal and reset currently selected value
			this.setState({
				groupActionModalOpen: false,
				currentTemporaryGroupId: undefined
			});

			// Also notify the main form if the selected component was the deleted one (to update the main input value even if the user closes the modal without confirming)
			if(currentGroup && group.id === currentGroup.groupData.id) {

				this.confirmGroup(undefined, undefined);
			}
		});
	}
}

/**
 * GroupPickerComponent's input props
 */
export type GroupPickerComponentInput = FormInputComponentInput & {

	/**
	 * The current input values
	 */
	currentGroup: MediaItemGroupInternal | undefined;

	/**
	 * The text placeholder
	 */
	placeholder: string;

	/**
	 * The list of all available groups
	 */
	groups: GroupInternal[];

	/**
	 * Flag to tell if the groups list requires a fetch. If so, on startup or on update the component will invoke the fetch callback.
	 */
	requiresFetch: boolean;
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
	 * Callback to add a new group
	 */
	addNewGroup: () => void;

	/**
	 * Callback to edit a group
	 */
	editGroup: (group: GroupInternal) => void;
	
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
export type GroupPickerComponentState = {

	/**
	 * If the main group picker modal is open
	 */
	mainModalOpen: boolean;

	/**
	 * If the extra group actions modal is open
	 */
	groupActionModalOpen: boolean;

	/**
	 * The currently selected group, to be confirmed by the user
	 */
	currentTemporaryGroupId: string | undefined;

	/**
	 * The currently inserted order, to be confirmed by the user
	 */
	currentTemporaryOrder: number | undefined;
}
