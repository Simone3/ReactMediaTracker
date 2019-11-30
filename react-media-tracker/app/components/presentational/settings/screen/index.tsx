import React, { Component, ReactNode } from 'react';
import { View, Button } from 'react-native';
import { styles } from 'app/components/presentational/category/list/screen/styles';
import { HeaderHamburgerComponent } from 'app/components/presentational/generic/header-hamburger';
import { ScreenProps, ScreenConfig } from 'app/components/containers/generic/navigation';
import { HeaderComponent } from 'app/components/presentational/generic/header';
import { i18n } from 'app/utilities/i18n';
import { LoadingIndicatorComponent } from 'app/components/presentational/generic/loading-indicator';
import { navigationService } from 'app/utilities/navigation-service';
import { AppSections } from 'app/utilities/screens';

/**
 * Presentational component that contains the whole settings screen
 */
export class SettingsScreenComponent extends Component<SettingsScreenComponentProps> {
	
	/**
	 * @override
	 */
	public static readonly navigationOptions = (navigationScreenProps: ScreenProps): ScreenConfig => {
		return {
			headerTitle: <HeaderComponent
				title={i18n.t('settings.screen.title')}
				componentsLeft={<HeaderHamburgerComponent navigation={navigationScreenProps.navigation} />}
			/>
		};
	};

	/**
	 * @override
	 */
	public componentDidUpdate(): void {

		if(this.props.wasLoggedOut) {

			// When logout is completed, go to the unauthenticated section
			navigationService.navigate(AppSections.Unauthenticated);
		}
	}
	
	/**
	 * @override
	 */
	public render(): ReactNode {
		
		if(this.props.wasLoggedOut) {

			return null;
		}
		else {

			return (
				<View style={styles.container}>
					{this.renderLogoutButton()}
					<LoadingIndicatorComponent
						visible={this.props.isLoading}
						fullScreen={true}
					/>
				</View>
			);
		}
	}

	/**
	 * Helper to render the logout button
	 * @returns the component
	 */
	private renderLogoutButton(): ReactNode {

		return (
			<Button
				title={i18n.t('settings.screen.buttons.logout')}
				onPress={() => {
					this.props.logout();
				}}
			/>
		);
	}
}

/**
 * SettingsScreenComponent's input props
 */
export type SettingsScreenComponentInput = {

	/**
	 * Flag to tell if the component is currently waiting on an async operation. If true, shows the loading screen.
	 */
	isLoading: boolean;

	/**
	 * Flag to tell if the user was successfully logged out. If true, navigates the unauthenticated section of the app.
	 */
	wasLoggedOut: boolean;
}

/**
 * SettingsScreenComponent's output props
 */
export type SettingsScreenComponentOutput = {

	/**
	 * Callback to log the user out
	 */
	logout: () => void;
}

/**
 * SettingsScreenComponent's props
 */
export type SettingsScreenComponentProps = SettingsScreenComponentInput & SettingsScreenComponentOutput;
