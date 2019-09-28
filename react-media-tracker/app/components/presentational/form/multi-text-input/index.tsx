import { styles } from 'app/components/presentational/form/multi-text-input/styles';
import React, { ReactNode, Component } from 'react';
import { View, TextInput, ImageRequireSource, KeyboardTypeOptions, TouchableOpacity, FlatList, Text } from 'react-native';
import { FieldComponent, Field } from 'app/components/presentational/form/field';
import { ColoredImage } from 'app/components/presentational/generic/colored-image';
import { config } from 'app/config/config';
import { ModalComponent } from 'app/components/presentational/generic/modal';
import { i18n } from 'app/utilities/i18n';

/**
 * Presentational component to display a multiple text input (result is array of user-defined strings) with Formik
 */
export class MultiTextInputComponent extends Component<MultiTextInputComponentInput, MultiTextInputComponentState> {
	
	public state: MultiTextInputComponentState = { open: false, currentTemporaryValues: [ '' ] };

	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			name,
			icon
		} = this.props;

		return (
			<FieldComponent name={name}>
				{(field) => {
					return (
						<View style={styles.container}>
							<ColoredImage
								source={icon}
								tintColor={config.ui.colors.colorFormInputs}
								style={styles.icon}
							/>
							{this.renderInput(field)}
							{this.renderModal(field)}
						</View>
					);
				}}
			</FieldComponent>
		);
	}

	/**
	 * Helper to render the visibile form field
	 * @param field the field
	 * @returns the component
	 */
	private renderInput(field: Field): ReactNode {

		const {
			placeholder
		} = this.props;

		const values = field.value as string[] | undefined;
		const textValue = values ? values.join(', ') : '';

		return (
			<TouchableOpacity
				style={styles.inputContainer}
				onPress={(event) => {

					this.setState({
						open: true,
						currentTemporaryValues: values && values.length > 0 ? values : [ '' ]
					});
					field.onFocus(event);
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
	 * @param field the field
	 * @returns the component
	 */
	private renderModal(field: Field): ReactNode {

		return (
			<ModalComponent
				visible={this.state.open}
				onClose={() => {

					field.onBlur('');
					this.setState({ open: false });
				}}>
				<View style={styles.modalContent}>
					{this.renderModalContent(field)}
				</View>
			</ModalComponent>
		);
	}

	/**
	 * Helper to render the modal content
	 * @param field the field
	 * @returns the component
	 */
	private renderModalContent(field: Field): ReactNode {

		return (
			<View>
				<View style={styles.modalInputsContainer}>
					{this.renderModalInputs()}
				</View>
				<View style={styles.modalButtonsContainer}>
					{this.renderModalConfirmButton(field)}
				</View>
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
	 * @param field the field
	 * @returns the component
	 */
	private renderModalConfirmButton(field: Field): ReactNode {

		const {
			currentTemporaryValues
		} = this.state;

		const valid = currentTemporaryValues.length === 1 || !currentTemporaryValues.some((value) => {
			return !value || value.trim().length === 0;
		});

		return (
			<TouchableOpacity
				disabled={!valid}
				onPress={(event) => {

					const fieldValue = currentTemporaryValues.length === 1 && !currentTemporaryValues[0] ? [] : currentTemporaryValues;

					field.setValue(fieldValue);
					field.onBlur(event);
					this.setState({ open: false });
				}}>
				<Text style={!valid ? [ styles.submitText, styles.submitTextDisabled ] : styles.submitText }>
					{i18n.t('common.alert.default.okButton')}
				</Text>
			</TouchableOpacity>
		);
	}
}

/**
 * MultiTextInputComponent's input props
 */
export type MultiTextInputComponentInput = {

	/**
	 * The input name (unique in the form)
	 */
	name: string;

	/**
	 * The text placeholder
	 */
	placeholder: string;

	/**
	 * The keyboard type
	 */
	keyboardType?: KeyboardTypeOptions;

	/**
	 * The input icon
	 */
	icon: ImageRequireSource;
}

/**
 * DatePickerInputComponent's state
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

