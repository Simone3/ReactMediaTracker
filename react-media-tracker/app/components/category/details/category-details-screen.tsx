import React, { Component, ReactNode } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CategoryFormContainer } from 'app/containers/category/details/category-form';
import { navigationService } from 'app/utilities/navigation-service';

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
export class CategoryDetailsScreenComponent extends Component<CategoryDetailsScreenComponentInput & CategoryDetailsScreenComponentOutput> {
	
	/**
	 * React Navigation settings
	 */
	public static readonly navigationOptions = {
		title: 'Category Form'
	};

	/**
	 * @override
	 */
	public componentDidUpdate(): void {

		if(this.props.wasSaved) {

			// When save is completed, invalidate the list to trigger a reload and go back to the list
			this.props.invalidateCategoriesList();
			navigationService.back();
		}
	}

	/**
	 * @override
	 */
	public render(): ReactNode {
	
		if(this.props.wasSaved) {

			return null;
		}
		else if(this.props.isSaving) {
			
			return this.renderLoading();
		}
		else {

			return this.renderForm();
		}
	}

	/**
	 * Helper method to render the category form
	 * @returns the node portion
	 */
	private renderForm(): ReactNode {

		return (
			<View style={styles.container}>
				<CategoryFormContainer/>
			</View>
		);
	}

	/**
	 * Helper method to render the loading screen
	 * @returns the node portion
	 */
	private renderLoading(): ReactNode {

		return <Text>Saving...</Text>;
	}
}

/**
 * CategoryDetailsScreenComponent's input props
 */
export type CategoryDetailsScreenComponentInput = {

	/**
	 * Flag to tell if the category is currently being saved. If true, shows the loading indicator.
	 */
	isSaving: boolean;

	/**
	 * Flag to tell if the category was successfully saved. If true, navigates back the stack.
	 */
	wasSaved: boolean;
}

/**
 * CategoryDetailsScreenComponent's output props
 */
export type CategoryDetailsScreenComponentOutput = {

	/**
	 * Callback to invalidate the categories list, e.g. because the component changed one of them
	 */
	invalidateCategoriesList: () => void;
}
