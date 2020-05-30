import React, { Component, ReactNode } from 'react';
import { Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { GroupInternal } from 'app/data/models/internal/group';
import { styles } from 'app/components/presentational/group/list/row/styles';
import { RadioButtonComponent } from 'app/components/presentational/form/components/radio';
import { ImageComponent } from 'app/components/presentational/generic/image';
import { images } from 'app/utilities/images';
import { config } from 'app/config/config';

/**
 * Presentational component to display a generic group row
 */
export class GroupRowComponent extends Component<GroupRowComponentInput & GroupRowComponentOutput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			select,
			showOptionsMenu
		} = this.props;
		
		return (
			<TouchableWithoutFeedback
				onPress={select}
				onLongPress={showOptionsMenu}>
				<View style={styles.container}>
					{this.renderRadioButton()}
					{this.renderLabel()}
					{this.renderContextButton()}
				</View>
			</TouchableWithoutFeedback>
		);
	}

	/**
	 * Renders the radio button
	 * @returns the component
	 */
	private renderRadioButton(): ReactNode {

		const {
			selected
		} = this.props;

		return (
			<RadioButtonComponent
				selected={selected}
				onSelect={() => {
					/* Do nothing here */
				}}
			/>
		);
	}

	/**
	 * Renders the group label
	 * @returns the component
	 */
	private renderLabel(): ReactNode {

		const {
			group
		} = this.props;

		return (
			<View style={styles.nameContainer}>
				<Text style={styles.name} numberOfLines={1}>
					{group.name}
				</Text>
			</View>
		);
	}

	/**
	 * Renders the context menu button
	 * @returns the component
	 */
	private renderContextButton(): ReactNode {

		const {
			showOptionsMenu
		} = this.props;

		if(showOptionsMenu) {

			return (
				<TouchableOpacity
					style={styles.contextButtonContainer}
					onPress={showOptionsMenu}>
					<ImageComponent
						style={styles.contextButton}
						source={images.menuButton()}
						tintColor={config.ui.colors.black}
					/>
				</TouchableOpacity>
			);
		}
		else {

			return (
				<View style={styles.contextButtonContainer}>
					<View style={styles.contextButton} />
				</View>
			);
		}
	}
}

/**
 * GroupRowComponent's input props
 */
export type GroupRowComponentInput = {

	/**
	 * The group to be displayed
	 */
	group: GroupInternal;

	/**
	 * If the group is the currently selected on
	 */
	selected: boolean;

	/**
	 * If true, the row will show a radio button
	 */
	showRadioButton?: boolean;
};

/**
 * GroupRowComponent's output props
 */
export type GroupRowComponentOutput = {

	/**
	 * Callback to select the group
	 */
	select: () => void;

	/**
	 * Callback to open the options context menu (with e.g. the edit button).
	 * Undefined means row not clickable.
	 */
	showOptionsMenu?: () => void;
};

