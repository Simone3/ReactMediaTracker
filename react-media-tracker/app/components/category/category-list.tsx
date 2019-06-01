import React, { Component, ReactNode } from 'react';
import { FlatList, Text, View, Button } from 'react-native';
import { CategoryInternal } from 'app/models/internal/category';
import { CategoryRowComponent } from 'app/components/category/category-row';

/**
 * Presentational component to display the list of user categories
 */
export class CategoryListComponent extends Component<CategoryListComponentInput & CategoryListComponentOutput> {
	
	/**
	 * @override
	 */
	public constructor(props: CategoryListComponentInput & CategoryListComponentOutput) {

		super(props);

		this.renderCategories = this.renderCategories.bind(this);
		this.renderNone = this.renderNone.bind(this);
		this.renderLoading = this.renderLoading.bind(this);
		this.renderList = this.renderList.bind(this);
	}

	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<View>
				<Button
					onPress={() => {
						this.props.requestFetchCategories();
					}}
					title='Load Categories Test'
				/>
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
