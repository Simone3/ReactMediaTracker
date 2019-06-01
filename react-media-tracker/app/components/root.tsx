import React, { Component, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { CategoryListContainer } from 'app/containers/category/category-list';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

/**
 * Presentational component that contains all other components
 */
export class RootComponent extends Component {
	
	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<View style={styles.container}>
				<CategoryListContainer/>
			</View>
		);
	}
}
