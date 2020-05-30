import React, { ReactNode, Component } from 'react';
import { FieldComponent } from 'app/components/presentational/form/fields/generic';
import { GenericEntityPickerComponent, GenericEntityPickerComponentInput, GenericEntityPickerComponentOutput } from 'app/components/presentational/form/components/entity-picker';

/**
 * Formik wrapper of GenericEntityPickerComponent for groups
 */
export class GroupPickerFieldComponent extends Component<GroupPickerFieldComponentProps> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			name
		} = this.props;

		return (
			<FieldComponent name={name}>
				{(field, status) => {
					return (
						<GenericEntityPickerComponent
							{...this.props}
							status={status}
							currentEntity={field.value}
							onFocus={field.onFocus}
							onBlur={field.onBlur}
						/>
					);
				}}
			</FieldComponent>
		);
	}
}

/**
 * GroupPickerFieldComponent's input props
 */
export type GroupPickerFieldComponentInput = Omit<GenericEntityPickerComponentInput, 'currentEntity' | 'status'> & {

	/**
	 * The input name (unique in the form)
	 */
	name: string;
}

/**
 * GroupPickerFieldComponent's output props
 */
export type GroupPickerFieldComponentOutput = Omit<GenericEntityPickerComponentOutput, 'onFocus' | 'onBlur'>;

/**
 * GroupPickerFieldComponent's props
 */
export type GroupPickerFieldComponentProps = GroupPickerFieldComponentInput & GroupPickerFieldComponentOutput;

