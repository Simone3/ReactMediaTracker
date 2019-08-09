import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';
import { CategoryFormContainer } from 'app/components/containers/category/details/form';
import { navigationService } from 'app/utilities/navigation-service';
import { styles } from 'app/components/presentational/category/details/screen/styles';
import { CategoryDetailsHeaderTitleContainer } from 'app/components/containers/category/details/header-title';
import { LoadingIndicatorComponent } from 'app/components/presentational/generic/loading-indicator';
import { NavigationScreenProps } from 'react-navigation';
import { CategoryDetailsHeaderBackButtonContainer } from 'app/components/containers/category/details/header-back-button';

/**
 * Presentational component that contains the whole "categories details" screen, that works as the "add new category", "update category" and
 * "view category data" sections
 */
export class CategoryDetailsScreenComponent extends Component<CategoryDetailsScreenComponentInput & CategoryDetailsScreenComponentOutput> {
	
	/**
	 * @override
	 */
	public static readonly navigationOptions = (navigationScreenProps: NavigationScreenProps) => {
		return {
			headerTitle: <CategoryDetailsHeaderTitleContainer/>,
			headerLeft: <CategoryDetailsHeaderBackButtonContainer navigation={navigationScreenProps.navigation} />
		};
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
		else {

			return (
				<View style={styles.container}>
					<CategoryFormContainer/>
					<LoadingIndicatorComponent
						visible={this.props.isLoading}
					/>
				</View>
			);
		}
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
