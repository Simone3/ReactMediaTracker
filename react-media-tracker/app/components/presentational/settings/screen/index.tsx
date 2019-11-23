import React, { Component, ReactNode } from 'react';
import { View, Text } from 'react-native';
import { styles } from 'app/components/presentational/category/list/screen/styles';
import { HeaderHamburgerComponent } from 'app/components/presentational/generic/header-hamburger';
import { ScreenProps, ScreenConfig } from 'app/components/containers/generic/navigation';
import { HeaderComponent } from 'app/components/presentational/generic/header';
import { i18n } from 'app/utilities/i18n';

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
				<Text>Settings Screen!</Text>
			</View>
		);
	}
}

/**
 * SettingsScreenComponent's input props
 */
export type SettingsScreenComponentInput = {

}

/**
 * SettingsScreenComponent's output props
 */
export type SettingsScreenComponentOutput = {

}

/**
 * SettingsScreenComponent's props
 */
export type SettingsScreenComponentProps = SettingsScreenComponentInput & SettingsScreenComponentOutput;
