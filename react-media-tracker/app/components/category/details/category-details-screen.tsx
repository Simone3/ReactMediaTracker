import React, { Component, ReactNode } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CategoryFormContainer } from 'app/containers/category/details/category-form';
import { NavigationInjectedProps } from 'react-navigation';

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
export class CategoryDetailsScreenComponent extends Component<NavigationInjectedProps & CategoryDetailsScreenComponentInput & CategoryDetailsScreenComponentOutput> {
	
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

		if(this.props.saveCompleted) {

			// When save is completed, invalidate the list to trigger a reload and go back to the list
			this.props.invalidateCategoriesList();
			this.props.navigation.goBack();
		}
	}

	/**
	 * @override
	 */
	public render(): ReactNode {
	
		if(this.props.saveCompleted) {

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
	 * If true, the loading screen is shown
	 */
	isSaving: boolean;

	/**
	 * If true, the component automatically navigates back
	 */
	saveCompleted: boolean;
}

/**
 * CategoryDetailsScreenComponent's output props
 */
export type CategoryDetailsScreenComponentOutput = {

	/**
	 * Triggered when the component requests the categories list to be invalidated, e.g. because it changed one of them
	 */
	invalidateCategoriesList: () => void;
}
