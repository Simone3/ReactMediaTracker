import React, { Component, ReactNode } from 'react';
import { Text } from 'react-native';
import { CategoryInternal } from 'app/models/internal/category';

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
			edit: onEdit
		} = this.props;

		return (
			<Text
				style={{ color: category.color }}
				onPress={onEdit}>
				{category.mediaType} - {category.name}
			</Text>
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
	 * The callback to edit the category
	 */
	edit: () => void;
};

