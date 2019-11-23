import React, { Component, ReactNode } from 'react';
import { View, Text } from 'react-native';
import { styles } from 'app/components/presentational/category/list/screen/styles';
import { HeaderHamburgerComponent } from 'app/components/presentational/generic/header-hamburger';
import { ScreenProps, ScreenConfig } from 'app/components/containers/generic/navigation';
import { HeaderComponent } from 'app/components/presentational/generic/header';
import { i18n } from 'app/utilities/i18n';

/**
 * Presentational component that contains the whole credits screen
 */
export class CreditsScreenComponent extends Component<CreditsScreenComponentProps> {
	
	/**
	 * @override
	 */
	public static readonly navigationOptions = (navigationScreenProps: ScreenProps): ScreenConfig => {
		return {
			headerTitle: <HeaderComponent
				title={i18n.t('credits.screen.title')}
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
				<Text>Credits Screen!</Text>
			</View>
		);
	}
}

/**
 * CreditsScreenComponent's input props
 */
export type CreditsScreenComponentInput = {

}

/**
 * CreditsScreenComponent's output props
 */
export type CreditsScreenComponentOutput = {

}

/**
 * CreditsScreenComponent's props
 */
export type CreditsScreenComponentProps = CreditsScreenComponentInput & CreditsScreenComponentOutput;
