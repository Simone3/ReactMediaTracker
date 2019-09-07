import React, { Component, ReactNode } from 'react';
import { CategoryInternal } from 'app/data/models/internal/category';
import { ColoredImage, ColoredImageInput } from 'app/components/presentational/generic/colored-image';
import { images } from 'app/utilities/images';

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
				source={images.mediaType(this.props.category.mediaType)}
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
