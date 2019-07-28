import { styles } from 'app/components/generic/buttons-list/styles';
import React, { Component, ReactNode } from 'react';
import { View, ImageRequireSource, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { HrComponent } from 'app/components/generic/hr';

/**
 * Presentational component to display a title and a list of buttons with icons
 */
export class ButtonsListComponent extends Component<ButtonsListComponentInput & ButtonsListComponentOutput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			buttons,
			title,
			titleIcon
		} = this.props;

		return (
			<View style={styles.container}>
				<View style={styles.titleSectionContainer}>
					{this.renderRow(title, titleIcon)}
				</View>
				<HrComponent/>
				<FlatList
					style={styles.list}
					data={buttons}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity onPress={item.onClick}>
								{this.renderRow(item.label, item.icon)}
							</TouchableOpacity>
						);
					}}
					keyExtractor={(item) => {
						return item.label;
					}}
				/>
			</View>
		);
	}

	/**
	 * Helper to render a row
	 * @param label the text label
	 * @param icon the icon
	 * @returns the rendered component
	 */
	private renderRow(label: string, icon: ImageRequireSource): ReactNode {

		return (
			<View style={styles.rowContainer}>
				<View style={styles.rowIconContainer}>
					<Image
						source={icon}
						style={styles.rowIcon}
						resizeMode='center'
					/>
				</View>
				<View style={styles.rowLabelContainer}>
					<Text style={styles.rowLabel} numberOfLines={1}>
						{label}
					</Text>
				</View>
			</View>
		);
	}
}

/**
 * ButtonsListComponent's input props
 */
export type ButtonsListComponentInput = {

	/**
	 * Modal title label
	 */
	title: string;

	/**
	 * Modal title icon
	 */
	titleIcon: ImageRequireSource;

	/**
	 * The list of buttons descriptors to display
	 */
	buttons: ButtonsListComponentButton[];
}

/**
 * ButtonsListComponent's output props
 */
export type ButtonsListComponentOutput = {

}

/**
 * ButtonsListComponent's button descriptor
 */
export type ButtonsListComponentButton = {

	/**
	 * Button label
	 */
	label: string;

	/**
	 * Button icon
	 */
	icon: ImageRequireSource;

	/**
	 * Button click callback
	 */
	onClick: () => void;
}
