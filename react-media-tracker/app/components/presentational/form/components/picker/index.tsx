import { styles } from 'app/components/presentational/form/components/picker/styles';
import React, { ReactNode, Component } from 'react';
import { ImageRequireSource, Picker } from 'react-native';
import { FormInputComponent, FormInputComponentInput, FormInputComponentOutput } from 'app/components/presentational/form/components/generic';

/**
 * Presentational component to display a picker
 */
export class PickerComponent extends Component<PickerComponentProps> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			icon,
			prompt,
			items,
			currentItem,
			onSelectItem
		} = this.props;

		const selectedItem = items.find((item) => {
			return currentItem === item.value;
		});

		const displayedIcon = selectedItem && selectedItem.icon ? selectedItem.icon : icon;

		return (
			<FormInputComponent {...this.props} icon={displayedIcon}>
				<Picker
					mode='dialog'
					prompt={prompt}
					selectedValue={currentItem}
					style={styles.input}
					onValueChange={onSelectItem}>
					{items.map((item, index) => {
						return (
							<Picker.Item
								key={index}
								label={item.label}
								value={item.value}
							/>
						);
					})}
				</Picker>
			</FormInputComponent>
		);
	}
}

/**
 * PickerComponent's input props
 */
export type PickerComponentInput = FormInputComponentInput & {

	/**
	 * The current value
	 */
	currentItem: string | undefined;

	/**
	 * The input items
	 */
	items: PickerComponentItem[];

	/**
	 * The modal title
	 */
	prompt: string;
}

/**
 * PickerComponent's output props
 */
export type PickerComponentOutput = FormInputComponentOutput;

/**
 * PickerComponent's props
 */
export type PickerComponentProps = PickerComponentInput & PickerComponentOutput & {

	/**
	 * Notifies input value change
	 */
	onSelectItem: (value: string | undefined | null) => void;
}

/**
 * An item displayed by PickerComponent
 */
export type PickerComponentItem = {

	/**
	 * The item value
	 */
	value: string | undefined | null;

	/**
	 * The item label
	 */
	label: string;

	/**
	 * The item icon, that optionally overwrites the default input icon
	 */
	icon?: ImageRequireSource;
}
