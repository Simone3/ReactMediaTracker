import React, { ReactNode, Component } from 'react';
import { styles } from 'app/components/presentational/form/components/date-picker/styles';
import { View, TouchableOpacity } from 'react-native';
import { FormInputComponent, FormInputComponentInput, FormInputComponentOutput } from 'app/components/presentational/form/components/generic';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AppError } from 'app/data/models/internal/error';
import { PlaceholderTextComponent } from 'app/components/presentational/generic/placeholder-text';

/**
 * Presentational component to display a date picker
 */
export class DatePickerComponent extends Component<DatePickerComponentProps, DatePickerComponentState> {
	
	public state: DatePickerComponentState = { open: false };

	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<View>
				{this.renderInput()}
				{this.renderModal()}
			</View>
		);
	}

	/**
	 * Helper to render the main input (full)
	 * @returns the component
	 */
	private renderInput(): ReactNode {

		const {
			hideIconAndStatus
		} = this.props;

		if(hideIconAndStatus) {

			return this.renderInputInternal();
		}
		else {

			return (
				<FormInputComponent {...this.props}>
					{this.renderInputInternal()}
				</FormInputComponent>
			);
		}
	}

	/**
	 * Helper to render the main input (internal part)
	 * @returns the component
	 */
	private renderInputInternal(): ReactNode {

		const {
			currentDate,
			placeholder,
			onFocus,
			disabled
		} = this.props;

		return (
			<TouchableOpacity
				style={styles.inputContainer}
				disabled={disabled}
				onPress={(event) => {
					this.setState({ open: true });
					onFocus(event);
				}}>
				<PlaceholderTextComponent
					style={styles.input}
					placeholder={placeholder}>
					{currentDate ? currentDate.toLocaleDateString() : ''}
				</PlaceholderTextComponent>
			</TouchableOpacity>
		);
	}

	/**
	 * Helper to render the modal
	 * @returns the component
	 */
	private renderModal(): ReactNode {

		if(this.state.open) {

			return this.renderPicker();
		}
	}

	/**
	 * Helper to render the actual date picker
	 * @returns the component
	 */
	private renderPicker(): ReactNode {

		const {
			currentDate,
			onBlur,
			onSelectDate
		} = this.props;

		if(this.state.open) {

			return (
				<DateTimePicker
					value={currentDate || new Date()}
					mode={'date'}
					is24Hour={true}
					display='default'
					onChange={(event, newValue) => {

						if(event.type === 'dismissed') {
							
							this.setState({ open: false });
							onBlur(event);
						}
						else if(event.type === 'set') {

							this.setState({ open: false });
							onSelectDate(newValue);
							onBlur(event);
						}
						else {

							throw AppError.GENERIC.withDetails(`Date picker event type not recognized: ${event.type}`);
						}
					}}
				/>
			);
		}
	}
}

/**
 * DatePickerComponent's input props
 */
export type DatePickerComponentInput = FormInputComponentInput & {

	/**
	 * The current value
	 */
	currentDate: Date | undefined;

	/**
	 * The input placeholder
	 */
	placeholder: string;

	/**
	 * If true, the icon and status underline are not displayed
	 */
	hideIconAndStatus?: boolean;
}

/**
 * DatePickerComponent's output props
 */
export type DatePickerComponentOutput = FormInputComponentOutput & {

	/**
	 * Notifies input value change
	 */
	onSelectDate: (date: Date | undefined) => void;
}

/**
 * DatePickerComponent's props
 */
export type DatePickerComponentProps = DatePickerComponentInput & DatePickerComponentOutput;

/**
 * DatePickerComponent's state
 */
export type DatePickerComponentState = {

	/**
	 * If the modal is open
	 */
	open: boolean;
}
