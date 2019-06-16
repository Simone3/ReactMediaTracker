import React, { Component, ReactNode } from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import { FormikProps, FormikValues, Field, FieldProps } from 'formik';

/**
 * Presentational component that contains all category form input fields
 */
export class CategoryFormViewComponent extends Component<FormikProps<FormikValues>> {

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		const {
			handleSubmit,
			errors,
			isValid
		} = this.props;

		return (
			<View>
				<Field name='name'>
					{({ field }: FieldProps) => {
						return (
							<TextInput
								onChangeText={field.onChange(field.name)}
								onBlur={field.onBlur(field.name)}
								value={field.value}
								placeholder='Name'
							/>
						);
					}}
				</Field>
				{errors.name &&
					<Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>
				}
				<Button
					title='Save'
					onPress={handleSubmit}
					disabled={!isValid}
				/>
			</View>
		);
	}
}
