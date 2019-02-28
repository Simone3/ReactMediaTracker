import React, {Component, ReactNode} from 'react';
import { FlatList } from 'react-native';
import { MediaRowComponent } from "./";
import { MediaItem } from '../../model';

/**
 * Presentational component to display a generic media item list
 */
export class MediaListComponent extends Component<MediaListComponentProps> {

	render(): ReactNode {

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
export type MediaListComponentProps = {

	/**
	 * The media items to be displayed
	 */
	itemsList: MediaItem[];
}
