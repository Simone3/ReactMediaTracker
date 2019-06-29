import React, { Component, ReactNode } from 'react';
import { View, Text } from 'react-native';
import { CategoryFormContainer } from 'app/containers/category/details/category-form';
import { navigationService } from 'app/utilities/navigation-service';
import { styles } from 'app/components/category/details/category-details-screen/styles';

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

			// When save is completed, go back to the list
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
		else if(this.props.isLoading) {
			
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
	 * Flag to tell if the component is currently waiting on an async operation. If true, shows the loading screen.
	 */
	isLoading: boolean;

	/**
	 * Flag to tell if the category was successfully saved. If true, navigates back the stack.
	 */
	wasSaved: boolean;
}

/**
 * CategoryDetailsScreenComponent's output props
 */
export type CategoryDetailsScreenComponentOutput = {

}
