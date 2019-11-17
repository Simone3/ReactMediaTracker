import { styles } from 'app/components/presentational/form/helpers/entity-picker/styles';
import React, { ReactNode, Component } from 'react';
import { View, TextInput, TouchableOpacity, ImageRequireSource } from 'react-native';
import { ModalComponent } from 'app/components/presentational/generic/modal';
import { FormInputComponent, FormInputComponentInput, FormInputComponentOutput } from 'app/components/presentational/form/components/generic';
import { PickerComponent, PickerComponentItem } from 'app/components/presentational/form/components/picker';
import { ColoredImage } from 'app/components/presentational/generic/colored-image';
import { images } from 'app/utilities/images';
import { config } from 'app/config/config';
import { ButtonsListComponent, ButtonsListComponentButton } from 'app/components/presentational/generic/buttons-list';
import { navigationService } from 'app/utilities/navigation-service';
import { ConfirmAlert } from 'app/components/presentational/generic/confirm-alert';
import { ModalInputConfirmComponent } from 'app/components/presentational/form/helpers/modal-confirm';

/**
 * Presentational component to display a generic entity picker, with fetch, save and delete callbacks
 * @template E the entity
 */
export class GenericEntityPickerComponent<E> extends Component<GenericEntityPickerComponentProps<E>, GenericEntityPickerComponentState> {

	public state: GenericEntityPickerComponentState = {
		mainModalOpen: false,
		actionModalOpen: false,
		currentTemporaryEntity: undefined
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
				{this.renderActionsModal()}
			</FormInputComponent>
		);
	}

	/**
	 * Helper to invoke the fetch callback if the modal is open and the input fetch flag is true
	 */
	private requestFetchIfRequired(): void {
		
		const {
			requiresFetch,
			fetchEntities
		} = this.props;

		const {
			mainModalOpen
		} = this.state;

		if(mainModalOpen && requiresFetch) {

			fetchEntities();
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
			currentEntity,
			getInputDisplay,
			onLoadFirstTemporaryValues,
			getEntityValues,
			disabled
		} = this.props;

		const textValue = getInputDisplay(currentEntity);

		return (
			<TouchableOpacity
				style={styles.inputContainer}
				disabled={disabled}
				onPress={(event) => {

					// Open the modal and set the temporary data state
					if(onLoadFirstTemporaryValues) {

						onLoadFirstTemporaryValues();
					}
					this.setState({
						mainModalOpen: true,
						currentTemporaryEntity: currentEntity ? getEntityValues(currentEntity).id : undefined
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
			onBlur,
			extraModalFields
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
				<View style={ styles.modalContent }>
					<View style={styles.modalInputsContainer}>
						<View style={styles.modalPickerContainer}>
							{this.renderModalPicker()}
							{this.renderModalActionButton()}
						</View>
						{extraModalFields}
					</View>
					{this.renderModalConfirmButton()}
				</View>
			</ModalComponent>
		);
	}
	
	/**
	 * Helper to render the modal entity picker
	 * @returns the component
	 */
	private renderModalPicker(): ReactNode {

		const {
			entities,
			getEntityValues,
			labels
		} = this.props;

		// Options
		const items: PickerComponentItem[] = [{
			value: undefined,
			label: labels.optionNone
		}];
		for(const entity of entities) {

			const descriptor = getEntityValues(entity);

			items.push({
				value: descriptor.id,
				label: descriptor.name
			});
		}

		// Current selection
		const selectedItemId = this.state.currentTemporaryEntity;

		// Selection callback
		const onSelectEntity = (entityId: string | null | undefined): void => {

			this.setState({
				currentTemporaryEntity: entityId ? entityId : undefined
			});
		};

		return (
			<View style={styles.modalPicker}>
				<PickerComponent
					currentItem={selectedItemId}
					items={items}
					onSelectItem={onSelectEntity}
					prompt={labels.pickerPrompt}
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
	 * Helper to render the button to show the extra context options
	 * @returns the component
	 */
	private renderModalActionButton(): ReactNode {

		return (
			<TouchableOpacity onPress={() => {
				this.setState({	actionModalOpen: true });
			}} style={styles.modalActionButton}>
				<ColoredImage
					style={styles.modalActionButtonIcon}
					source={images.menuButton()}
					tintColor={config.ui.colors.colorModalContent}
				/>
			</TouchableOpacity>
		);
	}
	
	/**
	 * Helper to render the modal confirm button
	 * @returns the component
	 */
	private renderModalConfirmButton(): ReactNode {

		const {
			onBlur,
			checkValidity,
			onConfirmEntity
		} = this.props;

		const currentTempEntity = this.getCurrentlySelectedEntity();

		return (
			<ModalInputConfirmComponent
				valid={checkValidity(currentTempEntity)}
				onConfirm={(event) => {

					// Confirm entity to the main form
					onConfirmEntity(currentTempEntity);
					
					// Close modal
					onBlur(event);
					this.setState({ mainModalOpen: false });
				}}
			/>
		);
	}

	/**
	 * Helper to render the secondary modal with the entity actions
	 * @returns the component
	 */
	private renderActionsModal(): ReactNode {

		const {
			labels,
			modalIcon
		} = this.props;

		const {
			actionModalOpen
		} = this.state;

		const entity = this.getCurrentlySelectedEntity();

		const addNewButton: ButtonsListComponentButton = {
			label: labels.addButton,
			icon: images.addButton(),
			onClick: this.onAddNewEntity.bind(this)
		};

		const editButton: ButtonsListComponentButton = {
			label: labels.editButton,
			icon: images.editButton(),
			onClick: this.onEditEntity.bind(this),
			disabled: !entity
		};

		const deleteButton: ButtonsListComponentButton = {
			label: labels.deleteButton,
			icon: images.deleteButton(),
			onClick: this.onEntityDelete.bind(this),
			disabled: !entity
		};

		return (
			<ModalComponent
				visible={actionModalOpen}
				onClose={() => {
					this.setState({	actionModalOpen: false });
				}}
				horizontalPosition='center'
				verticalPosition='bottom'>
				<ButtonsListComponent
					title={labels.pickerPrompt}
					titleIcon={modalIcon}
					buttons={[ addNewButton, editButton, deleteButton ]}
				/>
			</ModalComponent>
		);
	}

	/**
	 * Retrieves the entity data from the currently temporarily selected ID, if any
	 * @returns the entity data or undefined if no entity is selected
	 */
	private getCurrentlySelectedEntity(): E | undefined {

		const {
			entities,
			getEntityValues
		} = this.props;

		const {
			currentTemporaryEntity
		} = this.state;

		let entity;
		if(currentTemporaryEntity) {

			entity = entities.find((value) => {

				return getEntityValues(value).id === currentTemporaryEntity;
			});
		}

		return entity;
	}

	/**
	 * Callback for the add new entity button
	 */
	private onAddNewEntity(): void {

		const {
			loadNewEntityDetails,
			entityDetailsScreenName
		} = this.props;

		// Load empty entity details and navigate to the entity form
		loadNewEntityDetails();
		navigationService.navigate(entityDetailsScreenName);

		// Close all modals (for the future: see if there's a way to keep the main modal open)
		this.setState({
			mainModalOpen: false,
			actionModalOpen: false
		});
	}

	/**
	 * Callback for the edit entity button
	 */
	private onEditEntity(): void {
		
		const {
			loadEntityDetails,
			entityDetailsScreenName
		} = this.props;

		// Get currently selected entity (for sure defined since the edit button is disabled if none is selected)
		const entity = this.getCurrentlySelectedEntity() as E;

		// Load entity details and navigate to the entity form
		loadEntityDetails(entity);
		navigationService.navigate(entityDetailsScreenName);

		// Close all modals (for the future: see if there's a way to keep the main modal open)
		this.setState({
			mainModalOpen: false,
			actionModalOpen: false
		});
	}

	/**
	 * Callback for the delete entity button
	 */
	private onEntityDelete(): void {
		
		const {
			deleteEntity,
			currentEntity,
			getEntityValues,
			onConfirmEntity,
			labels
		} = this.props;

		// Get currently selected entity (for sure defined since the edit button is disabled if none is selected)
		const selectedEntity = this.getCurrentlySelectedEntity() as E;

		// Ask for confirmation
		ConfirmAlert.alert(labels.deleteConfirmTitle, labels.deleteConfirmMessage(selectedEntity), () => {
			
			// Delete the entity
			deleteEntity(selectedEntity);

			// Reset currently selected value and close action modal
			this.setState({
				actionModalOpen: false,
				currentTemporaryEntity: undefined
			});

			// Also notify the main form if the selected component was the deleted one (to update the main input value even if the user closes the modal without confirming)
			if(currentEntity && getEntityValues(selectedEntity).id === getEntityValues(currentEntity).id) {

				onConfirmEntity(undefined);
			}
		});
	}
}

/**
 * GenericEntityPickerComponent's input props
 */
export type GenericEntityPickerComponentInput<E> = FormInputComponentInput & {

	/**
	 * The list of all available entities
	 */
	entities: E[];

	/**
	 * The current input value
	 */
	currentEntity: E | undefined;

	/**
	 * The text placeholder
	 */
	placeholder: string;

	/**
	 * Flag to tell if the entities list requires a fetch. If so, on startup or on update the component will invoke the fetch callback.
	 */
	requiresFetch: boolean;

	/**
	 * Navigation screen name for the entity form (it will be navigated to when adding or updating an entity)
	 */
	entityDetailsScreenName: string;

	/**
	 * The icon for the modal context menu
	 */
	modalIcon: ImageRequireSource;

	/**
	 * Label definition
	 */
	labels: GenericEntityPickerComponentLabels<E>;

	/**
	 * Any extra components to be displayed in the form of the main modal
	 */
	extraModalFields?: ReactNode;
}

/**
 * GenericEntityPickerComponent's input props for labels
 */
export type GenericEntityPickerComponentLabels<E> = {

	/**
	 * The "no entity" picker option
	 */
	optionNone: string;

	/**
	 * Picker title
	 */
	pickerPrompt: string;

	/**
	 * Add entity button
	 */
	addButton: string;

	/**
	 * Edit entity button
	 */
	editButton: string;

	/**
	 * Delete entity button
	 */
	deleteButton: string;

	/**
	 * Delete alert title
	 */
	deleteConfirmTitle: string;

	/**
	 * Delete alert content
	 */
	deleteConfirmMessage: (entity: E) => string;
}

/**
 * Simple helper component to describe an entity
 */
export type EntityDescriptor = {

	id: string;
	name: string;
};

/**
 * GenericEntityPickerComponent's output props
 */
export type GenericEntityPickerComponentOutput<E> = FormInputComponentOutput & {

	/**
	 * Callback to request the entities list (re)load
	 */
	fetchEntities: () => void;

	/**
	 * Callback to load a new entity details before navigating to the entity form
	 */
	loadNewEntityDetails: () => void;

	/**
	 * Callback to load an existing entity details before navigating to the entity form
	 */
	loadEntityDetails: (entity: E) => void;
	
	/**
	 * Callback to delete an existing entity
	 */
	deleteEntity: (entity: E) => void;

	/**
	 * Callback to confirm the modal values to the main form. Can only be invoked when checkValidity() is true.
	 */
	onConfirmEntity: (entity: E | undefined) => void;

	/**
	 * Callback to check the current temporary modal form validity
	 */
	checkValidity: (currentTemporaryEntity: E | undefined) => boolean;

	/**
	 * Callback to display the current text value of the main form input
	 */
	getInputDisplay: (currentEntity: E | undefined) => string;

	/**
	 * Callback to get the main entity descriptors
	 */
	getEntityValues: (entity: E) => EntityDescriptor;

	/**
	 * Callback to load any extra temporary values in the including component's state when the main modal is opened
	 */
	onLoadFirstTemporaryValues?: () => void;
}

/**
 * GenericEntityPickerComponent's props
 */
export type GenericEntityPickerComponentProps<E> = GenericEntityPickerComponentInput<E> & GenericEntityPickerComponentOutput<E>;

/**
 * GenericEntityPickerComponent's state
 */
type GenericEntityPickerComponentState = {

	/**
	 * If the main entity picker modal is open
	 */
	mainModalOpen: boolean;

	/**
	 * If the extra entity context modal is open
	 */
	actionModalOpen: boolean;

	/**
	 * The currently selected input ID, yet to be confirmed by the user
	 */
	currentTemporaryEntity: string | undefined;
}

