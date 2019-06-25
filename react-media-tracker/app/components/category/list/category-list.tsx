import React, { Component, ReactNode } from 'react';
import { FlatList, Text, View } from 'react-native';
import { CategoryInternal } from 'app/models/internal/category';
import { CategoryRowComponent } from 'app/components/category/list/category-row';

/**
 * Presentational component to display the list of user categories
 */
export class CategoryListComponent extends Component<CategoryListComponentInput & CategoryListComponentOutput> {
	
	/**
	 * @override
	 */
	public componentDidMount(): void {

		this.props.requestFetchCategories();
	}

	/**
	 * @override
	 */
	public componentDidUpdate(): void {

		if(this.props.requiresReload) {

			this.props.requestFetchCategories();
		}
	}

	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<View>
				{this.renderCategories()}
			</View>
		);
	}

	/**
	 * Helper method to render the main list
	 * @returns the node portion
	 */
	private renderCategories(): ReactNode {

		if(this.props.isLoading) {

			return this.renderLoading();
		}
		else if(this.props.categories.length > 0) {

			return this.renderList();
		}
		else {

			return this.renderNone();
		}
	}

	/**
	 * Helper method to render the no categories message
	 * @returns the node portion
	 */
	private renderNone(): ReactNode {

		return <Text>No Categories</Text>;
	}

	/**
	 * Helper method to render the loading screen
	 * @returns the node portion
	 */
	private renderLoading(): ReactNode {

		return <Text>Loading...</Text>;
	}

	/**
	 * Helper method to render categories list
	 * @returns the node portion
	 */
	private renderList(): ReactNode {

		return (
			<FlatList
				data={this.props.categories}
				renderItem={({ item }) => {
					return <CategoryRowComponent category={item}></CategoryRowComponent>;
				}}
				keyExtractor={(item) => {
					return item.id;
				}}
			/>
		);
	}
}

/**
 * CategoryListComponent's input props
 */
export type CategoryListComponentInput = {

	/**
	 * The categories to be displayed
	 */
	categories: CategoryInternal[];

	/**
	 * Flag to show the loading screen
	 */
	isLoading: boolean;

	/**
	 * Flag to request a new list reload
	 */
	requiresReload: boolean;
}

/**
 * CategoryListComponent's output props
 */
export type CategoryListComponentOutput = {

	/**
	 * Triggered when the component requests the updated list of categories
	 */
	requestFetchCategories: () => void;
}
