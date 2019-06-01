import React, { Component, ReactNode } from 'react';
import { Text } from 'react-native';
import { CategoryInternal } from 'app/models/internal/category';

/**
 * Presentational component to display a generic category row
 */
export class CategoryRowComponent extends Component<CategoryRowComponentProps> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<Text>{this.props.category.mediaType} - {this.props.category.name}</Text>
		);
	}
}

/**
 * CategoryRowComponent's props
 */
export type CategoryRowComponentProps = {

	/**
	 * The category linked with the row
	 */
	category: CategoryInternal;
};

