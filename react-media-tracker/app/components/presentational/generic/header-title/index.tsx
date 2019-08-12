import { styles } from 'app/components/presentational/generic/header-title/styles';
import React, { Component, ReactNode } from 'react';
import { View, Text, TouchableOpacity, ImageRequireSource } from 'react-native';
import { ColoredImage } from 'app/components/presentational/generic/colored-image';

/**
 * Presentational component to display the header title, optionally with a clickable icon
 */
export class HeaderTitleComponent extends Component<HeaderTitleComponentInput & HeaderTitleComponentOutput> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			title
		} = this.props;

		return (
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>
				{this.renderIcon()}
			</View>
		);
	}

	/**
	 * Helper to render the icon
	 * @returns the icon
	 */
	private renderIcon(): ReactNode {

		const {
			icon,
			iconClickStatus,
			onIconClick
		} = this.props;

		if(icon) {

			if(!iconClickStatus || iconClickStatus === 'NOT_CLICKABLE') {

				return (
					<ColoredImage
						source={icon}
						tintColor='white'
						style={styles.icon}
					/>
				);
			}
			else {

				const iconClickEnabled = iconClickStatus === 'ENABLED';

				return (
					<TouchableOpacity
						onPress={onIconClick}
						disabled={!iconClickEnabled}>
						<ColoredImage
							source={icon}
							tintColor='white'
							style={iconClickEnabled ? styles.icon : [ styles.icon, styles.iconDisabled ]}
						/>
					</TouchableOpacity>
				);
			}
		}
		else {

			return null;
		}
	}
}

/**
 * HeaderTitle's input props
 */
export type HeaderTitleComponentInput = {

	/**
	 * The header title
	 */
	title: string;

	/**
	 * The optional header icon
	 */
	icon?: ImageRequireSource;

	/**
	 * The icon click status
	 */
	iconClickStatus?: 'NOT_CLICKABLE' | 'ENABLED' | 'DISABLED';
}

/**
 * HeaderTitle's output props
 */
export type HeaderTitleComponentOutput = {

	/**
	 * The icon click callback, called only if clickable and enabled
	 */
	onIconClick?: () => void;
}
