import React, { ReactNode, Component } from 'react';
import { styles } from 'app/components/form/color-picker-input/styles';
import { FieldComponent, Field } from 'app/components/form/field';
import { View, ImageRequireSource, Image, TouchableOpacity, Text } from 'react-native';
import { ModalComponent } from 'app/components/generic/modal';

/**
 * Presentational component to display a color picker input with Formik
 */
export class ColorPickerInputComponent extends Component<ColorPickerInputComponentInput, ColorPickerInputComponentState> {
	
	public state: ColorPickerInputComponentState = { open: false };

	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			name
		} = this.props;

		return (
			<FieldComponent name={name}>
				{(field) => {
					return (
						<View>
							{this.renderField(field)}
							{this.renderModal(field)}
						</View>
					);
				}}
			</FieldComponent>
		);
	}

	/**
	 * Helper to render the field
	 * @param field the field data
	 * @returns the component
	 */
	private renderField(field: Field): ReactNode {

		const {
			icon
		} = this.props;

		const value = field.value as string;

		return (
			<View style={styles.container}>
				<Image
					source={icon}
					style={styles.icon}
				/>
				<TouchableOpacity style={styles.nameCicleIconContainer}
					onPress={(event) => {
						this.setState({ open: true });
						field.onFocus(event);
					}}>
					<Text style={styles.colorName}>
						{value ? value.toUpperCase() : ''}
					</Text>
					<View
						style={[ styles.colorCircleIcon, { backgroundColor: value || 'white' }]}
					/>
				</TouchableOpacity>
			</View>
		);
	}

	/**
	 * Helper to render the modal
	 * @param field the field data
	 * @returns the component
	 */
	private renderModal(field: Field): ReactNode {

		const {
			colors
		} = this.props;

		return (
			<ModalComponent
				visible={this.state.open}
				onClose={() => {
					field.onBlur('');
					this.setState({ open: false });
				}}>
				<View style={styles.modalContent}>
					<View style={styles.colorCirclesGrid}>
						{colors.map((color) => {
							return (
								<TouchableOpacity
									key={color}
									onPress={(event) => {
										field.setValue(color);
										field.onBlur(event);
										this.setState({ open: false });
									}}>
									<View
										style={[ styles.colorCircleButton, { backgroundColor: color }]}
									/>
								</TouchableOpacity>
							);
						})}
					</View>
				</View>
			</ModalComponent>
		);
	}
}

/**
 * ColorPickerInputComponent's input props
 */
export type ColorPickerInputComponentInput = {

	/**
	 * The input name (unique in the form)
	 */
	name: string;

	/**
	 * The input icon
	 */
	icon: ImageRequireSource;

	/**
	 * List of selectable colors (hex format)
	 */
	colors: string[];
}

/**
 * ColorPickerInputComponent's state
 */
export type ColorPickerInputComponentState = {

	/**
	 * If the color picker modal is open
	 */
	open: boolean;
}
