import React, { Component, ReactNode } from 'react';
import { FlatList, Text, View } from 'react-native';
import { CategoryInternal } from 'app/models/internal/category';
import { CategoryRowComponent } from 'app/components/category/list/category-row';
import { navigationService } from 'app/utilities/navigation-service';
import { AppScreens } from 'app/utilities/screens';
import { i18n } from 'app/lang/lang';

/**
 * Presentational component to display the list of user categories
 */
export class CategoriesListComponent extends Component<CategoriesListComponentInput & CategoriesListComponentOutput> {
	
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

		if(this.props.categories.length > 0) {

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

		return <Text>{i18n.t('category.list.empty')}</Text>;
	}

	/**
	 * Helper method to render categories list
	 * @returns the node portion
	 */
	private renderList(): ReactNode {

		const {
			categories,
			loadCategoryDetails,
			deleteCategory
		} = this.props;

		return (
			<FlatList
				data={categories}
				renderItem={({ item }) => {
					return (
						<CategoryRowComponent
							category={item}
							edit={() => {
								loadCategoryDetails(item);
								navigationService.navigate(AppScreens.CategoryDetails);
							}}
							delete={() => {
								deleteCategory(item);
							}}>
						</CategoryRowComponent>
					);
				}}
				keyExtractor={(item) => {
					return item.id;
				}}
			/>
		);
	}
}

/**
 * CategoriesListComponent's input props
 */
export type CategoriesListComponentInput = {

	/**
	 * The categories list to be displayed
	 */
	categories: CategoryInternal[];
}

/**
 * CategoriesListComponent's output props
 */
export type CategoriesListComponentOutput = {

	/**
	 * Callback to load the given category details
	 * @param category the category to edit
	 */
	loadCategoryDetails: (category: CategoryInternal) => void;

	/**
	 * Callback to delete a category
	 * @param category the category to delete
	 */
	deleteCategory: (category: CategoryInternal) => void;
}
