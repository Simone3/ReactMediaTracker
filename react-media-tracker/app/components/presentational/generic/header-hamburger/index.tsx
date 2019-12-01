import React, { Component, ReactNode } from 'react';
import { config } from 'app/config/config';
import { HeaderIconComponent } from 'app/components/presentational/generic/header-icon';
import { images } from 'app/utilities/images';
import { NavigationScreenProp } from 'react-navigation';

/**
 * Presentational component to display the header hamburger button to open the side drawer
 */
export class HeaderHamburgerComponent extends Component<HeaderHamburgerComponentProps> {

	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<HeaderIconComponent
				source={images.menu()}
				tintColor={config.ui.colors.colorContrastText}
				onClick={() => {
					this.props.navigation.openDrawer();
				}}
				clickStatus='ENABLED'
			/>
		);
	}
}

/**
 * HeaderHamburgerComponent's props
 */
export type HeaderHamburgerComponentProps = {

	/**
	 * The navigation data
	 */
	navigation: NavigationScreenProp<object>;
}
