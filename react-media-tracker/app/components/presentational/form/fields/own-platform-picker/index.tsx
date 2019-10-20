import React, { ReactNode, Component } from 'react';
import { FieldComponent } from 'app/components/presentational/form/fields/generic';
import { OwnPlatformPickerComponent, OwnPlatformPickerComponentInput, OwnPlatformPickerComponentOutput } from 'app/components/presentational/form/components/own-platform-picker';

/**
 * Formik wrapper of OwnPlatformPickerComponent
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
						<OwnPlatformPickerComponent
							{...this.props}
							status={status}
							currentOwnPlatform={field.value}
							onSelectOwnPlatform={field.setValue}
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
export type OwnPlatformPickerFieldComponentInput = Omit<OwnPlatformPickerComponentInput, 'currentOwnPlatform' | 'status'> & {

	/**
	 * The input name (unique in the form)
	 */
	name: string;
}

/**
 * OwnPlatformPickerFieldComponent's output props
 */
export type OwnPlatformPickerFieldComponentOutput = Omit<OwnPlatformPickerComponentOutput, 'onSelectOwnPlatform' | 'onFocus' | 'onBlur'>;

/**
 * OwnPlatformPickerFieldComponent's props
 */
export type OwnPlatformPickerFieldComponentProps = OwnPlatformPickerFieldComponentInput & OwnPlatformPickerFieldComponentOutput;

