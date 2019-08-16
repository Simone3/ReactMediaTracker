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
			icons
		} = this.props;

		return (
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>
				{icons}
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
	 * The optional header icons, shown on the right in the specified order
	 */
	icons?: ReactNode;
}

/**
 * HeaderComponent's props
 */
export type HeaderComponentProps = HeaderComponentInput;
