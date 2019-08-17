import { styles } from 'app/components/presentational/generic/header-icon/styles';
import React, { Component, ReactNode } from 'react';
import { TouchableOpacity, ImageRequireSource } from 'react-native';
import { ColoredImage } from 'app/components/presentational/generic/colored-image';
import { config } from 'app/config/config';

/**
 * Presentational component to display an header icon, optionally clickable
 */
export class HeaderIconComponent extends Component<HeaderIconComponentInput & HeaderIconComponentOutput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			source,
			clickStatus,
			onClick
		} = this.props;

		if(clickStatus === 'NOT_CLICKABLE') {

			return (
				<ColoredImage
					source={source}
					tintColor={config.ui.colors.colorContrastText}
					style={styles.icon}
				/>
			);
		}
		else {

			const iconClickEnabled = clickStatus === 'ENABLED';

			return (
				<TouchableOpacity
					onPress={onClick}
					disabled={!iconClickEnabled}>
					<ColoredImage
						source={source}
						tintColor={config.ui.colors.colorContrastText}
						style={iconClickEnabled ? styles.icon : [ styles.icon, styles.iconDisabled ]}
					/>
				</TouchableOpacity>
			);
		}
	}
}

/**
 * HeaderIconComponent's input props
 */
export type HeaderIconComponentInput = {

	/**
	 * The icon source
	 */
	source: ImageRequireSource;

	/**
	 * The icon clickable status
	 */
	clickStatus: 'NOT_CLICKABLE' | 'ENABLED' | 'DISABLED';
}

/**
 * HeaderIconComponent's output props
 */
export type HeaderIconComponentOutput = {

	/**
	 * The icon click callback, called only if clickable and enabled
	 */
	onClick?: () => void;
}
