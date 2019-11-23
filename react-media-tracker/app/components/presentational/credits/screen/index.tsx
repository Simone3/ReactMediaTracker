import React, { Component, ReactNode } from 'react';
import { View, Text } from 'react-native';
import { styles } from 'app/components/presentational/category/list/screen/styles';
import { HeaderHamburgerComponent } from 'app/components/presentational/generic/header-hamburger';
import { ScreenProps, ScreenConfig } from 'app/components/containers/generic/navigation';
import { HeaderComponent } from 'app/components/presentational/generic/header';
import { i18n } from 'app/utilities/i18n';
import { HyperlinkComponent } from 'app/components/presentational/generic/hyperlink';

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
				<Text style={styles.text}>
					Movies and TV Shows data provided by <HyperlinkComponent url='https://www.themoviedb.org'>The Movie Database (TMDb)</HyperlinkComponent> (this product uses the TMDb API but is not endorsed or certified by TMDb).
					{'\n\n'}
					Videogames data provided by <HyperlinkComponent url='http://www.giantbomb.com'>Giant Bomb</HyperlinkComponent>.
					{'\n\n'}
					Books data provided by <HyperlinkComponent url='https://books.google.com'>Google Books</HyperlinkComponent>.
				</Text>
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
