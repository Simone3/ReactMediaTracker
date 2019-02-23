import React, {Component} from 'react';
import { Text } from 'react-native';
import { MediaItem } from '../../model';

/**
 * Presentational component to display a generic media item row
 */
export default class MediaRowComponent extends Component<Props> {

	render() {

		return (
			<Text>{this.props.data.key}</Text>
		);
	}
}

/**
 * Component props
 */
class Props {

	/**
	 * The media item linked with the row
	 */
	data: MediaItem;

	constructor(data: MediaItem) {

		this.data = data;
	}
}


