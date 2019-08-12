import { styles } from 'app/components/presentational/form/text-input/styles';
import React, { ReactNode, Component } from 'react';
import { View, TextInput, ImageRequireSource } from 'react-native';
import { FieldComponent } from 'app/components/presentational/form/field';
import { ColoredImage } from 'app/components/presentational/generic/colored-image';

/**
 * Presentational component to display a text input with Formik
 */
export class TextInputComponent extends Component<TextInputComponentInput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			name,
			placeholder,
			icon
		} = this.props;

		return (
			<FieldComponent name={name}>
				{(field) => {
					return (
						<View style={styles.container}>
							<ColoredImage
								source={icon}
								tintColor='black'
								style={styles.icon}
							/>
							<TextInput
								onChangeText={field.onChange}
								onFocus={field.onFocus}
								onBlur={field.onBlur}
								value={field.value}
								placeholder={placeholder}
								style={styles.input}
							/>
						</View>
					);
				}}
			</FieldComponent>
		);
	}
}

/**
 * TextInputComponent's input props
 */
export type TextInputComponentInput = {

	/**
	 * The input name (unique in the form)
	 */
	name: string;

	/**
	 * The text placeholder
	 */
	placeholder: string;

	/**
	 * The input icon
	 */
	icon: ImageRequireSource;
}
