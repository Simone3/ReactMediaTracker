import React, {Component, ReactNode} from 'react';
import { Text } from 'react-native';
import { MediaItem } from '../../model';

/**
 * Presentational component to display a generic media item row
 */
export class MediaRowComponent extends Component<MediaRowComponentProps> {

	render(): ReactNode {

		return (
			<Text>{this.props.item.key} - {this.props.item.name}</Text>
		);
	}
}

/**
 * MediaRowComponent's props
 */
export type MediaRowComponentProps = {

	/**
	 * The media item linked with the row
	 */
	item: MediaItem;
};

