import React, { Component, ReactNode } from 'react';
import { CategoryInternal } from 'app/data/models/internal/category';
import { mediaIconFactory } from 'app/factories/category';
import { ColoredImage, ColoredImageInput } from 'app/components/presentational/generic/colored-image';

/**
 * Presentational component to display a category icon based on its media type
 */
export class MediaIconComponent extends Component<MediaIconComponentInput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<ColoredImage
				source={mediaIconFactory.get(this.props.category)}
				tintColor={this.props.tintColor}
				{...this.props}>
				{this.props.children}
			</ColoredImage>
		);
	}
}

/**
 * Media's input props
 */
export type MediaIconComponentInput = Omit<ColoredImageInput, 'source'> & {

	/**
	 * The linked category
	 */
	category: CategoryInternal;
}
