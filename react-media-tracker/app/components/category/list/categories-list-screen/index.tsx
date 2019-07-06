import React, { Component, ReactNode } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AppScreens } from 'app/utilities/screens';
import { CategoriesListContainer } from 'app/containers/category/list/categories-list';
import { CategoryInternal } from 'app/models/internal/entities/category';
import { navigationService } from 'app/utilities/navigation-service';
import { styles } from 'app/components/category/list/categories-list-screen/styles';
import { i18n } from 'app/lang/lang';

/**
 * Presentational component that contains the whole "categories list" screen, that lists all user categories
 */
export class CategoriesListScreenComponent extends Component<CategoriesListScreenComponentInput & CategoriesListScreenComponentOutput> {
	
	/**
	 * React Navigation settings
	 */
	public static readonly navigationOptions = {
		title: i18n.t('category.list.title')
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
		
		if(this.props.isLoading) {

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
				<CategoriesListContainer/>
				<TouchableOpacity
					style={styles.fab}
					onPress={() => {
						this.props.loadNewCategoryDetails();
						navigationService.navigate(AppScreens.CategoryDetails);
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

		return <Text>Fetching... Replace with loading image...</Text>;
	}
}

/**
 * CategoriesListScreenComponent's input props
 */
export type CategoriesListScreenComponentInput = {
	
	/**
	 * Flag to tell if the component is currently waiting on an async operation. If true, shows the loading screen.
	 */
	isLoading: boolean;

	/**
	 * Flag to tell if the categories list was invalidated. If true, requests a new reload.
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
	 * @param category the existing category
	 */
	loadCategoryDetails: (category: CategoryInternal) => void;
}
