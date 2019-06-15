import React, { Component, ReactNode } from 'react';
import { View, Button, TextInput } from 'react-native';
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
			handleSubmit
		} = this.props;

		return (
			<View>
				<Field
					name='name'
					render={({ field }: FieldProps) => {
						return (
							<TextInput
								onChangeText={field.onChange(field.name)}
								onBlur={field.onBlur(field.name)}
								value={field.value}
								placeholder='Name'
							/>
						);
					}}
				/>
				<Button
					title='Save'
					onPress={handleSubmit}
				/>
			</View>
		);
	}
}
