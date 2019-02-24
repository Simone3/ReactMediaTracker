import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { MediaRowComponent } from "./";
import { MediaItem } from '../../model';

/**
 * Presentational component to display a generic media item list
 */
export default class MediaListComponent extends Component<Props> {

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
 * Component props
 */
class Props {

	/**
	 * The media items to be displayed
	 */
	itemsList: MediaItem[];

	constructor(itemsList: MediaItem[]) {

		this.itemsList = itemsList;
	}
}
