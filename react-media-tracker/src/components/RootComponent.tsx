import React, {Component, ReactNode} from 'react';
import { StyleSheet, View } from 'react-native';
import { MediaListContainer, AddMediaContainer } from "../containers";

/**
 * Presentational component that contains all other components
 */
export class RootComponent extends Component {
	
	render(): ReactNode {
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
