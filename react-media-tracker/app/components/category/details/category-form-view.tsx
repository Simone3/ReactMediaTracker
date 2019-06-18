import React, { Component, ReactNode } from 'react';
import { View, Button, TextInput, Text, Picker } from 'react-native';
import { FormikProps, FormikValues, Field, FieldProps } from 'formik';
import { MEDIA_TYPES_INTERNAL } from 'app/models/internal/category';

/**
 * Presentational component that contains all category form input fields
 */
export class CategoryFormViewComponent extends Component<FormikProps<FormikValues>> {

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<View>
				{this.nameField()}
				{this.mediaTypeField()}
				{this.colorField()}
				{this.errors()}
				{this.saveButton()}
			</View>
		);
	}

	/**
	 * Helper
	 * @returns the name component
	 */
	private nameField(): ReactNode {

		return (
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
		);
	}

	/**
	 * Helper
	 * @returns the media type component
	 */
	private mediaTypeField(): ReactNode {

		return (
			<Field name='mediaType'>
				{({ field }: FieldProps) => {
					return (
						<Picker
							selectedValue={field.value}
							style={{ height: 50, width: 200 }}
							onValueChange={field.onChange(field.name)}>
							<Picker.Item key='EMPTY' label='' value='' />
							{MEDIA_TYPES_INTERNAL.map((mediaType) => {
								return (
									<Picker.Item key={mediaType} label={mediaType} value={mediaType} />
								);
							})}
						</Picker>
					);
				}}
			</Field>
		);
	}

	/**
	 * Helper
	 * @returns the color component
	 */
	private colorField(): ReactNode {

		return (
			<Field name='color'>
				{({ field }: FieldProps) => {
					return (
						<Picker
							selectedValue={field.value}
							style={{ height: 50, width: 200 }}
							onValueChange={field.onChange(field.name)}>
							<Picker.Item label='' value='' />
							<Picker.Item label='blue' value='#3c82eb' />
							<Picker.Item label='red' value='#f25a5a' />
							<Picker.Item label='green' value='#74eb74' />
							<Picker.Item label='orange' value='#ee9b52' />
							<Picker.Item label='yellow' value='#f5e064' />
							<Picker.Item label='purple' value='#e75fe7' />
							<Picker.Item label='cyan' value='#4bead7' />
							<Picker.Item label='grey' value='#6e6d66' />
						</Picker>
					);
				}}
			</Field>
		);
	}

	/**
	 * Helper
	 * @returns the optional error messages
	 */
	private errors(): ReactNode | null {

		const {
			errors
		} = this.props;

		if(errors) {

			return Object.keys(errors).map((field) => {

				return (
					<Text key={field} style={{ fontSize: 10, color: 'red' }}>{errors[field]}</Text>
				);
			});
		}
		else {

			return null;
		}
	}

	/**
	 * Helper
	 * @returns the save button
	 */
	private saveButton(): ReactNode {

		const {
			handleSubmit,
			isValid
		} = this.props;

		return (
			<Button
				title='Save'
				onPress={handleSubmit}
				disabled={!isValid}
			/>
		);
	}
}
