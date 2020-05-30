import React, { ReactNode, Component } from 'react';
import { styles } from 'app/components/presentational/form/components/group-picker/styles';
import { FormInputComponentInput, FormInputComponentOutput, FormInputComponent } from 'app/components/presentational/form/components/generic';
import { GroupInternal } from 'app/data/models/internal/group';
import { PlaceholderTextComponent } from 'app/components/presentational/generic/placeholder-text';
import { TouchableOpacity } from 'react-native';

/**
 * Presentational component to display a media item group picker
 */
export class GroupPickerComponent extends Component<GroupPickerComponentProps> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<FormInputComponent {...this.props}>
				{this.renderInput()}
			</FormInputComponent>
		);
	}

	/**
	 * Helper to render the visibile form field
	 * @returns the component
	 */
	private renderInput(): ReactNode {

		const {
			currentGroup,
			disabled,
			placeholder,
			requestGroupSelection
		} = this.props;

		const textValue = currentGroup ? currentGroup.name : '';

		return (
			<TouchableOpacity
				style={styles.inputContainer}
				disabled={disabled}
				onPress={requestGroupSelection}>
				<PlaceholderTextComponent
					style={styles.input}
					placeholder={placeholder}>
					{textValue}
				</PlaceholderTextComponent>
			</TouchableOpacity>
		);
	}
}

/**
 * GroupPickerComponent's input props
 */
export type GroupPickerComponentInput = FormInputComponentInput & {

	/**
	 * The current input values
	 */
	currentGroup: GroupInternal | undefined;

	/**
	 * The input placeholder
	 */
	placeholder: string;
}

/**
 * GroupPickerComponent's output props
 */
export type GroupPickerComponentOutput = FormInputComponentOutput & {

	/**
	 * Callback to request the actual group selection screen
	 */
	requestGroupSelection: () => void;
}

/**
 * GroupPickerComponent's props
 */
export type GroupPickerComponentProps = GroupPickerComponentInput & GroupPickerComponentOutput;

