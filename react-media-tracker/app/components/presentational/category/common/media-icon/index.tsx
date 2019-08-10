import React, { Component, ReactNode } from 'react';
import { Image, ImageProps } from 'react-native';
import { CategoryInternal } from 'app/data/models/internal/category';
import { MediaIconBuilder } from 'app/components/presentational/category/common/media-icon/helper';

/**
 * Presentational component to display a category icon based on its media type
 */
export class MediaIconComponent extends Component<MediaIconComponentInput> {
	
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
 * Media's input props
 */
export type MediaIconComponentInput = Omit<ImageProps, 'source'> & {

	/**
	 * The linked category
	 */
	category: CategoryInternal;
}
