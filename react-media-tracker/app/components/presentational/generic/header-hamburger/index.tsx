import React, { Component, ReactNode } from 'react';
import { config } from 'app/config/config';
import { HeaderIconComponent } from 'app/components/presentational/generic/header-icon';
import { images } from 'app/utilities/images';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import { ScreenProps } from 'app/components/containers/generic/navigation';
import { AppError } from 'app/data/models/internal/error';

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

					const navigation = this.props.navigationScreenProps.navigation as NavigationDrawerProp;
					if(typeof navigation.openDrawer === 'undefined') {

						throw AppError.GENERIC.withDetails('Added HeaderHamburgerComponent in a component not inside Drawer Navigation');
					}

					navigation.openDrawer();
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
	 * The navigation props
	 */
	navigationScreenProps: ScreenProps;
}
