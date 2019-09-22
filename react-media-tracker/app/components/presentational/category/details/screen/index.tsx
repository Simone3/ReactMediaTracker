import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';
import { CategoryFormContainer } from 'app/components/containers/category/details/form';
import { navigationService } from 'app/utilities/navigation-service';
import { styles } from 'app/components/presentational/category/details/screen/styles';
import { CategoryDetailsHeaderContainer } from 'app/components/containers/category/details/header';
import { LoadingIndicatorComponent } from 'app/components/presentational/generic/loading-indicator';
import { CategoryDetailsHeaderBackButtonContainer } from 'app/components/containers/category/details/header-back-button';
import { CategoryDetailsHeaderSaveIconContainer } from 'app/components/containers/category/details/header-save-icon';
import { NavigationStackOptions, NavigationStackScreenProps } from 'react-navigation-stack';

/**
 * Presentational component that contains the whole "categories details" screen, that works as the "add new category", "update category" and
 * "view category data" sections
 */
export class CategoryDetailsScreenComponent extends Component<CategoryDetailsScreenComponentInput & CategoryDetailsScreenComponentOutput> {
	
	/**
	 * @override
	 */
	public static readonly navigationOptions = (navigationScreenProps: NavigationStackScreenProps): NavigationStackOptions => {
		return {
			headerTitle: <CategoryDetailsHeaderContainer
				componentsLeft={<CategoryDetailsHeaderBackButtonContainer navigation={navigationScreenProps.navigation} />}
				componentsRight={<CategoryDetailsHeaderSaveIconContainer />}
			/> as unknown as string,
			headerLeft: null
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
						fullScreen={true}
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
