import React, { Component, ReactNode } from 'react';
import { config } from 'app/config/config';
import { navigationService } from 'app/utilities/navigation-service';
import { HeaderIconComponent } from 'app/components/presentational/generic/header-icon';
import { images } from 'app/utilities/images';

/**
 * Presentational component to display a standard header back button
 */
export class HeaderBackComponent extends Component<HeaderBackComponentProps> {

	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			disabled,
			onClick
		} = this.props;

		return (
			<HeaderIconComponent
				source={images.back()}
				tintColor={config.ui.colors.colorContrastText}
				onClick={onClick ? onClick : this.defaultOnClick}
				clickStatus={disabled ? 'DISABLED' : 'ENABLED'}
			/>
		);
	}
	
	/**
	 * Default on press callback
	 */
	private defaultOnClick(): void {

		navigationService.back();
	}
}

/**
 * HeaderBackComponent's input props
 */
export type HeaderBackComponentInput = {

	/**
	 * If the button is not currently clickable
	 */
	disabled?: boolean;
}

/**
 * HeaderBackComponent's output props
 */
export type HeaderBackComponentOutput = {

	/**
	 * Click callback, defaults to navigationService.back()
	 */
	onClick?: () => void;
}

/**
 * HeaderBackComponent's props
 */
export type HeaderBackComponentProps = HeaderBackComponentInput & HeaderBackComponentOutput;
