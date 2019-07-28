import React, { Component, ReactNode } from 'react';
import { ImageRequireSource, Image, ImageProps } from 'react-native';
import { CategoryInternal } from 'app/models/internal/entities/category';
import { AppError } from 'app/models/internal/error';

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
				source={CategoryIconComponent.getCategoryIcon(this.props.category)}
				{...this.props}>
				{this.props.children}
			</Image>
		);
	}

	/**
	 * Gets the correct category icon based on its media type
	 * @param category the category
	 * @returns the image
	 */
	public static getCategoryIcon(category: CategoryInternal): ImageRequireSource {

		switch(category.mediaType) {

			case 'BOOK':
				return require('app/resources/images/ic_book.png');

			case 'MOVIE':
				return require('app/resources/images/ic_movie.png');

			case 'TV_SHOW':
				return require('app/resources/images/ic_tvshow.png');

			case 'VIDEOGAME':
				return require('app/resources/images/ic_videogame.png');

			default:
				throw AppError.GENERIC.withDetails(`Category icon not mapped for media type ${category.mediaType}`);
		}
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
