import React, { Component, ReactNode } from 'react';
import { Field, FieldProps } from 'formik';
import { StyleProp, ViewStyle, View } from 'react-native';
import { styles } from 'app/components/presentational/form/field/styles';

/**
 * Wrapper of Formik <Field> that:
 * - Handles focused state (input is currently active) since base <Field> does not at the moment
 * - Renders the common input container based on the current input state
 */
export class FieldComponent extends Component<FieldComponentInput, FieldComponentState> {
	
	public state: FieldComponentState = { focused: false };

	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			name
		} = this.props;

		return (
			<Field name={name}>
				{(formikProps: FieldProps) => {

					const field: Field = {
						onChange: (event) => {
							formikProps.field.onChange(name)(event);
						},
						onFocus: () => {
							this.toggleFocus(true);
						},
						onBlur: (event) => {
							this.toggleFocus(false);
							formikProps.field.onBlur(name)(event);
						},
						value: formikProps.field.value,
						setValue: (value) => {
							formikProps.form.setFieldValue(name, value);
						}
					};

					return (
						<View style={this.getContainerStyle(formikProps)}>
							{this.props.children(field)}
						</View>
					);
				}}
			</Field>
		);
	}
	
	/**
	 * Helper to get the contatiner style(s) based on field status
	 * @param formikProps Formik data
	 * @returns the container style(s)
	 */
	private getContainerStyle(formikProps: FieldProps): StyleProp<ViewStyle> {

		const {
			name
		} = this.props;

		const {
			form
		} = formikProps;

		const isError = form.touched[name] && form.errors[name];
		const isFocus = this.state.focused;

		if(isFocus) {

			return [ styles.container, styles.containerFocus ];
		}
		else if(isError) {

			return [ styles.container, styles.containerError ];
		}
		else {

			return styles.container;
		}
	}

	/**
	 * Helper to toggle the focus state
	 * @param focused new focus state
	 */
	private toggleFocus(focused: boolean): void {

		this.setState({ focused: focused });
	}
}

/**
 * Field data that children can access to get or notify form changes
 */
export type Field = {

	/**
	 * Allows children to notify input change
	 */
	onChange: (event: unknown) => void;

	/**
	 * Allows children to notify input focus (input is currently active)
	 */
	onFocus: (event: unknown) => void;
	
	/**
	 * Allows children to notify input blur (input is no longer active)
	 */
	onBlur: (event: unknown) => void;

	/**
	 * Allows children to get the input value
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	value: any;

	/**
	 * Allows children that use custom components to set the input value
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setValue: (value: any) => void;
};

/**
 * FieldComponent's input props
 */
export type FieldComponentInput = {

	/**
	 * The input name (unique in the form)
	 */
	name: string;

	/**
	 * The component's child must be a function (render prop)
	 */
	children: (field: Field) => ReactNode;
}

/**
 * FieldComponent's state
 */
export type FieldComponentState = {

	/**
	 * If the component is currently focused
	 */
	focused: boolean;
}
