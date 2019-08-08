import React, { Component, ReactNode } from 'react';
import { Image, ImageProps } from 'react-native';
import { CategoryInternal } from 'app/models/internal/entities/category';
import { MediaIconBuilder } from 'app/components/category/common/category-icon/helper';

/**
 * Presentational component to display a category icon based on its media type
 */
export class CategoryIconComponent extends Component<CategoryIconComponentInput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<Image
				source={MediaIconBuilder.getMediaIconFromCategory(this.props.category)}
				{...this.props}>
				{this.props.children}
			</Image>
		);
	}
}

/**
 * CategoryIconComponent's input props
 */
export type CategoryIconComponentInput = Omit<ImageProps, 'source'> & {

	/**
	 * The linked category
	 */
	category: CategoryInternal;
}
