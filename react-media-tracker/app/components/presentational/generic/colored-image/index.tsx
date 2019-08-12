import React, { Component, ReactNode } from 'react';
import { Image, ImageProps, ImageRequireSource } from 'react-native';

/**
 * Presentational component that wraps the default Image to specify the tint color via prop, plus some default style values
 */
export class ColoredImage extends Component<ColoredImageInput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			style,
			tintColor
		} = this.props;

		const defaultSizeStyle = {
			width: 30,
			height: 30
		};

		const colorStyle = {
			tintColor: tintColor
		};

		return (
			<Image
				{...this.props}
				style={[ defaultSizeStyle, colorStyle, style ]}>
				{this.props.children}
			</Image>
		);
	}
}

/**
 * ColoredImage's input props
 */
export type ColoredImageInput = ImageProps & {

	/**
	 * The image tint color
	 */
	tintColor: string;
}

/**
 * A simple helper type to specify source and tint color of an image, can be spread into the component props
 */
export type ColoredImageDescriptor = {

	/**
	 * The image path
	 */
	source: ImageRequireSource;

	/**
	 * The image color
	 */
	tintColor: string;
}
