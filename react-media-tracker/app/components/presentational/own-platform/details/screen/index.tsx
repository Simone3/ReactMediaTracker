import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';
import { OwnPlatformFormContainer } from 'app/components/containers/own-platform/details/form';
import { navigationService } from 'app/utilities/navigation-service';
import { styles } from 'app/components/presentational/own-platform/details/screen/styles';
import { OwnPlatformDetailsHeaderContainer } from 'app/components/containers/own-platform/details/header';
import { LoadingIndicatorComponent } from 'app/components/presentational/generic/loading-indicator';
import { OwnPlatformDetailsHeaderBackButtonContainer } from 'app/components/containers/own-platform/details/header-back-button';
import { OwnPlatformDetailsHeaderSaveIconContainer } from 'app/components/containers/own-platform/details/header-save-icon';
import { ScreenConfig, ScreenProps } from 'app/components/containers/generic/navigation';

/**
 * Presentational component that contains the whole "own platform details" screen, that works as the "add new own platform", "update own platform" and
 * "view own platform data" sections
 */
export class OwnPlatformDetailsScreenComponent extends Component<OwnPlatformDetailsScreenComponentInput & OwnPlatformDetailsScreenComponentOutput> {
	
	/**
	 * @override
	 */
	public static readonly navigationOptions = (navigationScreenProps: ScreenProps): ScreenConfig => {
		return {
			headerTitle: <OwnPlatformDetailsHeaderContainer
				componentsLeft={<OwnPlatformDetailsHeaderBackButtonContainer navigation={navigationScreenProps.navigation} />}
				componentsRight={<OwnPlatformDetailsHeaderSaveIconContainer />}
			/>
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
					<OwnPlatformFormContainer/>
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
 * OwnPlatformDetailsScreenComponent's input props
 */
export type OwnPlatformDetailsScreenComponentInput = {

	/**
	 * Flag to tell if the component is currently waiting on an async operation. If true, shows the loading screen.
	 */
	isLoading: boolean;

	/**
	 * Flag to tell if the own platform was successfully saved. If true, navigates back the stack.
	 */
	wasSaved: boolean;
}

/**
 * OwnPlatformDetailsScreenComponent's output props
 */
export type OwnPlatformDetailsScreenComponentOutput = {

}
