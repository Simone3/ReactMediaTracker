import React, { Component, ReactNode } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { CategoryListContainer } from 'app/containers/category/category-list';
import { CommonProps } from 'app/components/common/common';

const styles = StyleSheet.create({
	container: {
		marginTop: 100,
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

/**
 * Presentational component that contains all category components
 */
export class CategoryPageComponent extends Component<CommonProps> {
	
	/**
	 * React Navigation settings
	 */
	public static navigationOptions = {
		title: 'Categories'
	};

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<View style={styles.container}>
				<Button
					onPress={() => {
						this.props.navigation.navigate('MediaItems');
					}}
					title='Test Navigation'
				/>
				<CategoryListContainer/>
			</View>
		);
	}
}
