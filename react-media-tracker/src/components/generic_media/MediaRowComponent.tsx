import React, {Component} from 'react';
import { Text } from 'react-native';
import { MediaItem } from '../../model';

/**
 * Presentational component to display a generic media item row
 */
export class MediaRowComponent extends Component<MediaRowComponentProps> {

	render() {

		return (
			<Text>{this.props.item.key} - {this.props.item.name}</Text>
		);
	}
}

/**
 * MediaRowComponent's props
 */
export class MediaRowComponentProps {

	/**
	 * The media item linked with the row
	 */
	item: MediaItem;

	constructor(item: MediaItem) {

		this.item = item;
	}
}


