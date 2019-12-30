import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';
import { CategoryFormContainer } from 'app/components/containers/category/details/form';
import { styles } from 'app/components/presentational/category/details/screen/styles';
import { CategoryDetailsHeaderContainer } from 'app/components/containers/category/details/header';
import { LoadingIndicatorComponent } from 'app/components/presentational/generic/loading-indicator';
import { CategoryDetailsHeaderBackButtonContainer } from 'app/components/containers/category/details/header-back-button';
import { CategoryDetailsHeaderSaveIconContainer } from 'app/components/containers/category/details/header-save-icon';
import { ScreenProps } from 'app/components/containers/generic/navigation';
import { NavigationStackOptions } from 'react-navigation-stack';

/**
 * Presentational component that contains the whole "categories details" screen, that works as the "add new category", "update category" and
 * "view category data" sections
 */
export class CategoryDetailsScreenComponent extends Component<CategoryDetailsScreenComponentInput & CategoryDetailsScreenComponentOutput> {
	
	/**
	 * @override
	 */
	public static readonly navigationOptions = (navigationScreenProps: ScreenProps): NavigationStackOptions => {
		return {
			headerTitle: <CategoryDetailsHeaderContainer
				componentsLeft={<CategoryDetailsHeaderBackButtonContainer navigation={navigationScreenProps.navigation} />}
				componentsRight={<CategoryDetailsHeaderSaveIconContainer />}
			/>
		};
	};

	/**
	 * @override
	 */
	public render(): ReactNode {
	
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

/**
 * CategoryDetailsScreenComponent's input props
 */
export type CategoryDetailsScreenComponentInput = {

	/**
	 * Flag to tell if the component is currently waiting on an async operation. If true, shows the loading screen.
	 */
	isLoading: boolean;
}

/**
 * CategoryDetailsScreenComponent's output props
 */
export type CategoryDetailsScreenComponentOutput = {

}
