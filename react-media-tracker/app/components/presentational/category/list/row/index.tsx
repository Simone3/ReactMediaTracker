import React, { Component, ReactNode } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CategoryInternal } from 'app/data/models/internal/category';
import { styles } from 'app/components/presentational/category/list/row/styles';
import { MediaIconComponent } from 'app/components/presentational/category/common/media-icon';

/**
 * Presentational component to display a generic category row
 */
export class CategoryRowComponent extends Component<CategoryRowComponentInput & CategoryRowComponentOutput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			category
		} = this.props;
		
		return (
			<TouchableWithoutFeedback onLongPress={this.props.showOptionsMenu}>
				<View style={[ styles.container, { backgroundColor: category.color }]}>
					<View style={styles.iconContainer}>
						<MediaIconComponent
							category={category}
							style={styles.icon}
							resizeMode='center'
						/>
					</View>
					<View style={styles.nameContainer}>
						<Text style={styles.name} numberOfLines={1}>
							{category.name}
						</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

/**
 * CategoryRowComponent's input props
 */
export type CategoryRowComponentInput = {

	/**
	 * The category to be displayed
	 */
	category: CategoryInternal;
};

/**
 * CategoryRowComponent's output props
 */
export type CategoryRowComponentOutput = {

	/**
	 * Callback to open the options context menu (with e.g. the edit button)
	 */
	showOptionsMenu: () => void;
};

