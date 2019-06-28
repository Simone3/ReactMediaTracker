import React, { Component, ReactNode } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { AppRoutes } from 'app/containers/navigation';
import { NavigationInjectedProps } from 'react-navigation';
import { CategoriesListContainer } from 'app/containers/category/list/categories-list';
import { CategoryInternal } from 'app/models/internal/category';

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
export class CategoriesListScreenComponent extends Component<NavigationInjectedProps & CategoriesListScreenComponentInput & CategoriesListScreenComponentOutput> {
	
	/**
	 * React Navigation settings
	 */
	public static readonly navigationOptions = {
		title: 'Categories'
	};

	/**
	 * @override
	 */
	public componentWillMount(): void {

		// Load first list of categories
		this.props.fetchCategories();
	}

	/**
	 * @override
	 */
	public componentDidUpdate(): void {

		if(this.props.requiresReload) {

			// Reload categories if the current list was marked as invalid
			this.props.fetchCategories();
		}
	}

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		if(this.props.isFetching) {

			return this.renderLoading();
		}
		else {

			return this.renderScreen();
		}
	}

	/**
	 * Helper to render the complete list screen
	 * @returns the node portion
	 */
	public renderScreen(): ReactNode {
		
		return (
			<View style={styles.container}>
				<CategoriesListContainer
					editCategory={(category) => {
						this.props.loadCategoryDetails(category);
						this.props.navigation.navigate(AppRoutes.CategoryDetails);
					}}
				/>
				<TouchableOpacity
					style={styles.fab}
					onPress={() => {
						this.props.loadNewCategoryDetails();
						this.props.navigation.navigate(AppRoutes.CategoryDetails);
					}}>
					<Text style={styles.text}>+</Text>
				</TouchableOpacity>
			</View>
		);
	}

	/**
	 * Helper method to render the loading screen
	 * @returns the node portion
	 */
	private renderLoading(): ReactNode {

		return <Text>Fetching...</Text>;
	}
}

/**
 * CategoriesListScreenComponent's input props
 */
export type CategoriesListScreenComponentInput = {
	
	/**
	 * Flag to show the loading screen
	 */
	isFetching: boolean;

	/**
	 * Flag to request a new list reload
	 */
	requiresReload: boolean;
}

/**
 * CategoriesListScreenComponent's output props
 */
export type CategoriesListScreenComponentOutput = {

	/**
	 * Callback to request the categories list (re)load
	 */
	fetchCategories: () => void;

	/**
	 * Callback to load the details of a new category
	 */
	loadNewCategoryDetails: () => void;

	/**
	 * Callback to load the details of an existing category
	 */
	loadCategoryDetails: (category: CategoryInternal) => void;
}
