import { styles } from 'app/components/presentational/form/components/date-picker/styles';
import React, { ReactNode, Component } from 'react';
import { TouchableOpacity, TextInput } from 'react-native';
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
			hideIconAndStatus
		} = this.props;

		if(hideIconAndStatus) {

			return this.renderField();
		}
		else {

			return (
				<FormInputComponent {...this.props}>
					{this.renderField()}
				</FormInputComponent>
			);
		}
	}

	/**
	 * Renders the field
	 * @returns the cpmponent
	 */
	private renderField(): ReactNode {

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
			</TouchableOpacity>
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
