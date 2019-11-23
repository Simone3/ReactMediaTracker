import React, { Component, ReactNode } from 'react';
import { config } from 'app/config/config';
import { navigationService } from 'app/utilities/navigation-service';
import { HeaderBackButton } from 'react-navigation-stack';

/**
 * Presentational component to display a standard header back button
 */
export class HeaderBackComponent extends Component<{}> {

	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<HeaderBackButton
				onPress={() => {
					navigationService.back();
				}}
				tintColor={config.ui.colors.colorContrastText}
			/>
		);
	}
}
