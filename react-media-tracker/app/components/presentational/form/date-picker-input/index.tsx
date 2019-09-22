import { styles } from 'app/components/presentational/form/date-picker-input/styles';
import React, { ReactNode, Component } from 'react';
import { View, ImageRequireSource, TouchableOpacity, TextInput } from 'react-native';
import { FieldComponent } from 'app/components/presentational/form/field';
import { ColoredImage } from 'app/components/presentational/generic/colored-image';
import { config } from 'app/config/config';
import DateTimePicker from 'react-native-modal-datetime-picker';

/**
 * Presentational component to display a date picker input with Formik
 */
export class DatePickerInputComponent extends Component<DatePickerInputComponentInput, DatePickerInputComponentState> {
	
	public state: DatePickerInputComponentState = { open: false };

	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			name,
			icon,
			placeholder
		} = this.props;

		const {
			open
		} = this.state;

		return (
			<FieldComponent name={name}>
				{(field) => {

					const value = field.value as Date;

					return (
						<View>
							<View style={styles.container}>
								<ColoredImage
									source={icon}
									tintColor={config.ui.colors.colorFormInputs}
									style={styles.icon}
								/>
								<TouchableOpacity
									style={styles.inputButtonContainer}
									onPress={(event) => {
										this.setState({ open: true });
										field.onFocus(event);
									}}>
									<TextInput
										style={styles.inputButtonText}
										placeholder={placeholder}
										value={value ? value.toLocaleDateString() : ''}
										editable={false}>
									</TextInput>
								</TouchableOpacity>
							</View>
							<DateTimePicker
								date={value}
								mode='date'
								isVisible={open}
								onConfirm={(newValue) => {
									field.setValue(newValue);
									field.onBlur('');
									this.setState({ open: false });
								}}
								onCancel={() => {
									field.onBlur('');
									this.setState({ open: false });
								}}
							/>
						</View>
					);
				}}
			</FieldComponent>
		);
	}
}

/**
 * DatePickerInputComponent's input props
 */
export type DatePickerInputComponentInput = {

	/**
	 * The input name (unique in the form)
	 */
	name: string;

	/**
	 * The input placeholder
	 */
	placeholder: string;

	/**
	 * The input icon
	 */
	icon: ImageRequireSource;
}

/**
 * DatePickerInputComponent's state
 */
export type DatePickerInputComponentState = {

	/**
	 * If the date picker modal is open
	 */
	open: boolean;
}
