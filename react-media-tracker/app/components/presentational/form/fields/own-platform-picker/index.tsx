import React, { ReactNode, Component } from 'react';
import { FieldComponent } from 'app/components/presentational/form/fields/generic';
import { GenericEntityPickerComponent, GenericEntityPickerComponentInput, GenericEntityPickerComponentOutput } from 'app/components/presentational/form/components/entity-picker';

/**
 * Formik wrapper of GenericEntityPickerComponent for own platforms
 */
export class OwnPlatformPickerFieldComponent extends Component<OwnPlatformPickerFieldComponentProps> {
	
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
 * OwnPlatformPickerFieldComponent's input props
 */
export type OwnPlatformPickerFieldComponentInput = Omit<GenericEntityPickerComponentInput, 'currentEntity' | 'status'> & {

	/**
	 * The input name (unique in the form)
	 */
	name: string;
}

/**
 * OwnPlatformPickerFieldComponent's output props
 */
export type OwnPlatformPickerFieldComponentOutput = Omit<GenericEntityPickerComponentOutput, 'onFocus' | 'onBlur'>;

/**
 * OwnPlatformPickerFieldComponent's props
 */
export type OwnPlatformPickerFieldComponentProps = OwnPlatformPickerFieldComponentInput & OwnPlatformPickerFieldComponentOutput;

