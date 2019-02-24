import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { MediaListContainer, AddMediaContainer } from "../containers";

export class RootComponent extends Component {
	
	render() {
		return (
			<View style={styles.container}>
				<AddMediaContainer/>
				<MediaListContainer/>
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
