import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { MediaListComponent } from "./generic_media";
import { MediaItem } from '../model';

export default class RootComponent extends Component {

	private data: MediaItem[] = [
		new MediaItem('Test1'),
		new MediaItem('Test2'),
		new MediaItem('Test3')];
	
	render() {
		return (
			<View style={styles.container}>
				<MediaListComponent itemsList={this.data}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
