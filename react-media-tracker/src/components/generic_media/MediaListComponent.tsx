import React, {Component} from 'react';
import { FlatList } from 'react-native';
import { MediaRowComponent } from "./";
import { MediaItem } from '../../model';

/**
 * Presentational component to display a generic media item list
 */
export default class MediaListComponent extends Component {

	private data: MediaItem[] = [
		new MediaItem('Test1'),
		new MediaItem('Test2'),
		new MediaItem('Test3')];

	render() {

		return (
			<FlatList
				data={this.data}
				renderItem={({item}) => <MediaRowComponent data={item}></MediaRowComponent>}
			/>
		);
	}
}
