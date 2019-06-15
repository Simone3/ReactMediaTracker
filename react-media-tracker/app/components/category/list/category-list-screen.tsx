import React, { Component, ReactNode } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { CategoryListContainer } from 'app/containers/category/list/category-list';
import { CommonProps } from 'app/components/common/common';
import { AppRoutes } from 'app/containers/navigation';

const styles = StyleSheet.create({
	container: {
		marginTop: 100,
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	fab: {
		height: 50,
		width: 50,
		borderRadius: 200,
		position: 'absolute',
		bottom: 20,
		right: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#686cc3'
	},
	text: {
		fontSize: 30,
		color: 'white'
	}
});

/**
 * Presentational component that contains the whole "categories list" screen, that lists all user categories
 */
export class CategoryListScreenComponent extends Component<CommonProps> {
	
	/**
	 * React Navigation settings
	 */
	public static readonly navigationOptions = {
		title: 'Categories'
	};

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<View style={styles.container}>
				<CategoryListContainer/>
				<TouchableOpacity
					style={styles.fab}
					onPress={() => {
						this.props.navigation.navigate(AppRoutes.CategoryDetails);
					}}>
					<Text style={styles.text}>+</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
