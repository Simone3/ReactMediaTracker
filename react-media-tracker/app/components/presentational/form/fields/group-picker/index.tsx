import React, { ReactNode, Component } from 'react';
import { FieldComponent } from 'app/components/presentational/form/fields/generic';
import { GroupPickerComponent, GroupPickerComponentInput, GroupPickerComponentOutput } from 'app/components/presentational/form/components/group-picker';

/**
 * Formik wrapper of GroupPickerComponent
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
						<GroupPickerComponent
							{...this.props}
							status={status}
							currentGroup={field.value}
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
export type GroupPickerFieldComponentInput = Omit<GroupPickerComponentInput, 'currentGroup' | 'status'> & {

	/**
	 * The input name (unique in the form)
	 */
	name: string;
}

/**
 * GroupPickerFieldComponent's output props
 */
export type GroupPickerFieldComponentOutput = Omit<GroupPickerComponentOutput, 'onFocus' | 'onBlur'>;

/**
 * GroupPickerFieldComponent's props
 */
export type GroupPickerFieldComponentProps = GroupPickerFieldComponentInput & GroupPickerFieldComponentOutput;

