import React, { Component, ReactNode } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import { CategoryInternal } from 'app/models/internal/category';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
});

/**
 * Presentational component to display a generic category row
 */
export class CategoryRowComponent extends Component<CategoryRowComponentInput & CategoryRowComponentOutput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			category,
			edit
		} = this.props;

		return (
			<View style={styles.container}>
				<Text style={{ color: category.color }}>
					{category.mediaType} - {category.name}
				</Text>
				<Button
					title='Edit'
					onPress={edit}
				/>
			</View>
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
	 * Callback to edit the category
	 */
	edit: () => void;
};

