import { styles } from 'app/components/presentational/form/components/date-picker/styles';
import React, { ReactNode, Component } from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { FormInputComponent, FormInputComponentInput, FormInputComponentOutput } from 'app/components/presentational/form/components/generic';

/**
 * Presentational component to display a date picker
 */
export class DatePickerComponent extends Component<DatePickerComponentProps, DatePickerComponentState> {
	
	public state: DatePickerComponentState = { open: false };

	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			currentDate,
			placeholder,
			onFocus,
			onBlur,
			onSelectDate
		} = this.props;

		const {
			open
		} = this.state;

		return (
			<View>
				<FormInputComponent {...this.props}>
					<TouchableOpacity
						style={styles.inputButtonContainer}
						onPress={(event) => {
							this.setState({ open: true });
							onFocus(event);
						}}>
						<TextInput
							style={styles.inputButtonText}
							placeholder={placeholder}
							value={currentDate ? currentDate.toLocaleDateString() : ''}
							editable={false}>
						</TextInput>
					</TouchableOpacity>
				</FormInputComponent>
				<DateTimePicker
					date={currentDate}
					mode='date'
					isVisible={open}
					onConfirm={(newValue) => {
						onSelectDate(newValue);
						onBlur('');
						this.setState({ open: false });
					}}
					onCancel={() => {
						onBlur('');
						this.setState({ open: false });
					}}
				/>
			</View>
		);
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
}

/**
 * DatePickerComponent's output props
 */
export type DatePickerComponentOutput = FormInputComponentOutput & {

	/**
	 * Notifies input value change
	 */
	onSelectDate: (date: Date) => void;
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
	 * If the date picker modal is open
	 */
	open: boolean;
}
