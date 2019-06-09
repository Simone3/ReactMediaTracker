import React, { Component, ReactNode } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

/**
 * Test component
 */
export class MediaItemPageComponent extends Component {
	
	/**
	 * React Navigation settings
	 */
	public static navigationOptions = {
		title: 'Media Items'
	};

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<View style={styles.container}>
				<Text>This is the Media Items page!</Text>
			</View>
		);
	}
}
