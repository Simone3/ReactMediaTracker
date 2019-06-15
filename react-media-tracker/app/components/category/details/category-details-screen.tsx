import React, { Component, ReactNode } from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
 * Presentational component that contains the whole "categories details" screen, that works as the "add new category", "update category" and
 * "view category data" sections
 */
export class CategoryDetailsScreenComponent extends Component<CommonProps> {
	
	/**
	 * React Navigation settings
	 */
	public static readonly navigationOptions = {
		title: 'Category Form'
	};

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<View style={styles.container}>
				<Text>Hi, I&apos;m the Category Form!</Text>
			</View>
		);
	}
}
