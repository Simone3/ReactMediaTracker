import { styles } from 'app/components/presentational/form/picker-input/styles';
import React, { ReactNode, Component } from 'react';
import { View, ImageRequireSource, Picker } from 'react-native';
import { FieldComponent } from 'app/components/presentational/form/field';
import { AppError } from 'app/data/models/internal/error';
import { ColoredImage } from 'app/components/presentational/generic/colored-image';

/**
 * Presentational component to display a picker input with Formik
 */
export class PickerInputComponent extends Component<PickerInputComponentInput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			name,
			defaultIcon,
			prompt,
			items
		} = this.props;

		return (
			<FieldComponent name={name}>
				{(field) => {

					const selectedItem = items.find((item) => {
						return field.value === item.value;
					});

					const icon = selectedItem && selectedItem.icon ? selectedItem.icon : defaultIcon;
					if(!icon) {

						throw AppError.GENERIC.withDetails('Either item icon or default icon must be specified');
					}

					return (
						<View style={styles.container}>
							<ColoredImage
								source={icon}
								tintColor='black'
								style={styles.icon}
							/>
							<Picker
								mode='dialog'
								prompt={prompt}
								selectedValue={field.value}
								style={styles.input}
								onValueChange={field.onChange}>
								{items.map((item) => {
									return (
										<Picker.Item
											key={item.value}
											label={item.label}
											value={item.value}
										/>
									);
								})}
							</Picker>
						</View>
					);
				}}
			</FieldComponent>
		);
	}
}

/**
 * PickerInputComponent's input props
 */
export type PickerInputComponentInput = {

	/**
	 * The input name (unique in the form)
	 */
	name: string;

	/**
	 * The modal title
	 */
	prompt: string;

	/**
	 * The default input icon, if no item icon is specified
	 */
	defaultIcon?: ImageRequireSource;

	/**
	 * The input items
	 */
	items: PickerInputComponentItem[];
}

/**
 * An item displayed by PickerInputComponent
 */
export type PickerInputComponentItem = {

	/**
	 * The item value
	 */
	value: string;

	/**
	 * The item label
	 */
	label: string;

	/**
	 * The item icon
	 */
	icon?: ImageRequireSource;
}
