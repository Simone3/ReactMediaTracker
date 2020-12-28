import React, { Component, ReactNode } from 'react';
import { Text } from 'react-native';
import { DrawerLabelProps } from 'react-navigation-drawer';
import { styles } from 'app/components/presentational/generic/drawer-label/styles';
import { config } from 'app/config/config';

/**
 * Presentational component to display a drawer label (text displayed for each drawer item)
 */
export class DrawerLabelComponent extends Component<DrawerLabelComponentProps> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			text,
			tintColor
		} = this.props;

		const textColor = tintColor ? tintColor : config.ui.colors.black;

		return (
			<Text style={[ styles.text, { color: textColor }]}>
				{text}
			</Text>
		);
	}
}

/**
 * DrawerLabelComponent's props
 */
export type DrawerLabelComponentProps = DrawerLabelProps & {

	/**
	 * The label text
	 */
	text: string;
}

/**
 * Helper to build the component callback used in the drawer settings
 * @param text the label text
 * @returns the callback to pass to the drawer settings
 */
export const drawerLabelBuilder = (text: string) => {
	
	// eslint-disable-next-line react/display-name
	return (props: DrawerLabelProps): ReactNode => {

		return <DrawerLabelComponent {...props} text={text} />;
	};
};
