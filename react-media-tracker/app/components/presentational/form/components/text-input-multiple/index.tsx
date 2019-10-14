import { styles } from 'app/components/presentational/form/components/text-input-multiple/styles';
import React, { ReactNode, Component } from 'react';
import { View, TextInput, KeyboardTypeOptions, TouchableOpacity, FlatList, Text } from 'react-native';
import { ModalComponent } from 'app/components/presentational/generic/modal';
import { i18n } from 'app/utilities/i18n';
import { FormInputComponent, FormInputComponentInput, FormInputComponentOutput } from 'app/components/presentational/form/components/generic';
import { ModalInputConfirmComponent } from 'app/components/presentational/form/helpers/modal-confirm';

/**
 * Presentational component to display a multiple text input (result is array of user-defined strings)
 */
export class MultiTextInputComponent extends Component<MultiTextInputComponentProps, MultiTextInputComponentState> {
	
	public state: MultiTextInputComponentState = { open: false, currentTemporaryValues: [ '' ] };

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<FormInputComponent {...this.props}>
				{this.renderInput()}
				{this.renderModal()}
			</FormInputComponent>
		);
	}

	/**
	 * Helper to render the visibile form field
	 * @returns the component
	 */
	private renderInput(): ReactNode {

		const {
			placeholder,
			currentValues,
			onFocus
		} = this.props;

		const textValue = currentValues ? currentValues.join(', ') : '';

		return (
			<TouchableOpacity
				style={styles.inputContainer}
				onPress={(event) => {

					this.setState({
						open: true,
						currentTemporaryValues: currentValues && currentValues.length > 0 ? currentValues : [ '' ]
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
	 * Helper to render the modal
	 * @returns the component
	 */
	private renderModal(): ReactNode {

		const {
			onBlur
		} = this.props;

		return (
			<ModalComponent
				visible={this.state.open}
				onClose={() => {

					onBlur('');
					this.setState({ open: false });
				}}>
				<View style={styles.modalContent}>
					{this.renderModalContent()}
				</View>
			</ModalComponent>
		);
	}

	/**
	 * Helper to render the modal content
	 * @returns the component
	 */
	private renderModalContent(): ReactNode {

		return (
			<View>
				<View style={styles.modalInputsContainer}>
					{this.renderModalInputs()}
				</View>
				{this.renderModalConfirmButton()}
			</View>
		);
	}

	/**
	 * Helper to render the modal list of inputs
	 * @returns the component
	 */
	private renderModalInputs(): ReactNode {

		const {
			currentTemporaryValues
		} = this.state;

		return (
			<FlatList
				style={styles.modalInputsList}
				data={currentTemporaryValues}
				renderItem={(info) => {

					return (
						<View
							style={styles.modalInputContainer}>
							<TextInput
								style={styles.modalInput}
								placeholder={i18n.t('common.form.input.multiText.placeholder')}
								value={info.item}
								onChangeText={(text) => {

									const newTempValues = currentTemporaryValues.slice(0);
									newTempValues[info.index] = text;
									this.setState({ currentTemporaryValues: newTempValues });
								}}
							/>
							{this.renderModalInputIcon(info.index)}
						</View>
					);
				}}
				keyExtractor={(_, index) => {
					return String(index);
				}}
			/>
		);
	}

	/**
	 * Helper to render a modal input icon
	 * @param index the input index
	 * @returns the component
	 */
	private renderModalInputIcon(index: number): ReactNode {
		
		const {
			currentTemporaryValues
		} = this.state;

		let onClick;
		let text;
		let style;
		if(index === 0) {

			onClick = () => {

				const newTempValues = currentTemporaryValues.slice(0);
				newTempValues.push('');
				this.setState({ currentTemporaryValues: newTempValues });
			};

			text = '+';

			style = styles.modalInputAddText;
		}
		else {

			onClick = () => {

				const newTempValues = currentTemporaryValues.slice(0);
				newTempValues.splice(index, 1);
				this.setState({ currentTemporaryValues: newTempValues });
			};

			text = 'x';

			style = styles.modalInputRemoveText;
		}

		return (
			<TouchableOpacity
				style={styles.modalInputButton}
				onPress={onClick}>
				<Text style={[ styles.modalInputText, style ]}>{text}</Text>
			</TouchableOpacity>
		);
	}

	/**
	 * Helper to render the modal confirm button
	 * @returns the component
	 */
	private renderModalConfirmButton(): ReactNode {

		const {
			currentTemporaryValues
		} = this.state;

		const {
			onValuesChange,
			onBlur
		} = this.props;

		const valid = currentTemporaryValues.length === 1 || !currentTemporaryValues.some((value) => {
			return !value || value.trim().length === 0;
		});

		return (
			<ModalInputConfirmComponent
				valid={valid}
				onConfirm={(event) => {

					const fieldValue = currentTemporaryValues.length === 1 && !currentTemporaryValues[0] ? [] : currentTemporaryValues;

					onValuesChange(fieldValue);
					onBlur(event);
					this.setState({ open: false });
				}}
			/>
		);
	}
}

/**
 * MultiTextInputComponent's input props
 */
export type MultiTextInputComponentInput = FormInputComponentInput & {

	/**
	 * The current value
	 */
	currentValues: string[] | undefined;

	/**
	 * The text placeholder
	 */
	placeholder: string;

	/**
	 * The keyboard type
	 */
	keyboardType?: KeyboardTypeOptions;
}

/**
 * MultiTextInputComponent's output props
 */
export type MultiTextInputComponentOutput = FormInputComponentOutput;

/**
 * MultiTextInputComponent's props
 */
export type MultiTextInputComponentProps = MultiTextInputComponentInput & MultiTextInputComponentOutput & {

	/**
	 * Notifies input value change
	 */
	onValuesChange: (values: string[]) => void;
}

/**
 * DatePickerComponent's state
 */
export type MultiTextInputComponentState = {

	/**
	 * If the date picker modal is open
	 */
	open: boolean;

	/**
	 * The current modal values (not yet submitted)
	 */
	currentTemporaryValues: string[];
}

