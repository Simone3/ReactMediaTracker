import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { MediaRowComponent } from "./";
import { MediaItem } from '../../model';

/**
 * Presentational component to display a generic media item list
 */
export class MediaListComponent extends Component<MediaListComponentProps> {

	render() {

		return (
			<FlatList
				data={this.props.itemsList}
				renderItem={({item}) => <MediaRowComponent item={item}></MediaRowComponent>}
			/>
		);
	}
}

/**
 * MediaListComponent's props
 */
export class MediaListComponentProps {

	/**
	 * The media items to be displayed
	 */
	itemsList: MediaItem[];

	constructor(itemsList: MediaItem[]) {

		this.itemsList = itemsList;
	}
}
