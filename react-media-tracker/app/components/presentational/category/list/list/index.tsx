import React, { Component, ReactNode } from 'react';
import { FlatList, Text, View } from 'react-native';
import { CategoryInternal } from 'app/data/models/internal/entities/category';
import { CategoryRowComponent } from 'app/components/presentational/category/list/row';
import { i18n } from 'app/utilities/i18n';
import { styles } from 'app/components/presentational/category/list/list/styles';
import { CategoryModalContainer } from 'app/components/containers/category/list/modal';

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

		return <Text style={styles.emptyMessage}>{i18n.t('category.list.empty')}</Text>;
	}

	/**
	 * Helper method to render categories list
	 * @returns the node portion
	 */
	private renderList(): ReactNode {

		const {
			categories,
			highlightCategory
		} = this.props;

		return (
			<View>
				<FlatList
					style={styles.list}
					data={categories}
					renderItem={({ item }) => {
						return (
							<CategoryRowComponent
								category={item}
								showOptionsMenu={() => {
									highlightCategory(item);
								}}>
							</CategoryRowComponent>
						);
					}}
					keyExtractor={(item) => {
						return item.id;
					}}
				/>
				<CategoryModalContainer/>
			</View>
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
	 * Callback to set a category as highlighted, e.g. to open its dialog menu
	 */
	highlightCategory: (category: CategoryInternal) => void;
}
