import React, { Component, ReactNode } from 'react';
import { View } from 'react-native';
import { styles } from 'app/components/presentational/settings/screen/styles';
import { ClickableSettingsRowComponent } from 'app/components/presentational/settings/row-clickable';
import { SettingsSectionTitleComponent } from 'app/components/presentational/settings/section-title';
import { HeaderHamburgerComponent } from 'app/components/presentational/generic/header-hamburger';
import { ScreenProps, ScreenConfig } from 'app/components/containers/generic/navigation';
import { HeaderComponent } from 'app/components/presentational/generic/header';
import { i18n } from 'app/utilities/i18n';
import { LoadingIndicatorComponent } from 'app/components/presentational/generic/loading-indicator';
import { ConfirmAlert } from 'app/components/presentational/generic/confirm-alert';
import { UserInternal } from 'app/data/models/internal/user';

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
	public render(): ReactNode {

		return (
			<View style={styles.container}>
				<SettingsSectionTitleComponent title={i18n.t('settings.screen.sections.user')} />
				{this.renderLogoutButton()}
				<LoadingIndicatorComponent
					visible={this.props.isLoading}
					fullScreen={true}
				/>
			</View>
		);
	}

	/**
	 * Helper to render the logout button
	 * @returns the component
	 */
	private renderLogoutButton(): ReactNode {

		const {
			user,
			logout
		} = this.props;

		return (
			<ClickableSettingsRowComponent
				title={i18n.t('settings.screen.rows.logout.title')}
				subtitle={i18n.t('settings.screen.rows.logout.subtitle', { username: user ? user.name : '' })}
				onPress={() => {

					const title = i18n.t('settings.screen.alert.logout.title');
					const message = i18n.t('settings.screen.alert.logout.message');
					ConfirmAlert.alert(title, message, () => {
		
						logout();
					});
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
	 * The current user
	 */
	user?: UserInternal;

	/**
	 * Flag to tell if the component is currently waiting on an async operation. If true, shows the loading screen.
	 */
	isLoading: boolean;
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
