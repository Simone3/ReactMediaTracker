import { styles } from 'app/components/presentational/generic/header/styles';
import React, { Component, ReactNode } from 'react';
import { View, Text } from 'react-native';

/**
 * Presentational component to display the header, with a title and optionally one or more icons
 */
export class HeaderComponent extends Component<HeaderComponentProps> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			title,
			componentsLeft,
			componentsRight
		} = this.props;

		return (
			<View style={styles.container}>
				{componentsLeft}
				<Text style={styles.title}>{title}</Text>
				{componentsRight}
			</View>
		);
	}
}

/**
 * HeaderComponent's input props
 */
export type HeaderComponentInput = {

	/**
	 * The header title
	 */
	title: string;

	/**
	 * The optional component(s) to display left of the title, e.g. a custom back button
	 */
	componentsLeft?: ReactNode;

	/**
	 * The optional component(s) to display right of the title, e.g. custom icons
	 */
	componentsRight?: ReactNode;
}

/**
 * HeaderComponent's props
 */
export type HeaderComponentProps = HeaderComponentInput;