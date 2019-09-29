import React, { ReactNode, Component } from 'react';
import { ColoredImage } from 'app/components/presentational/generic/colored-image';
import { ImageRequireSource, StyleProp, ViewStyle, View } from 'react-native';
import { config } from 'app/config/config';
import { styles } from 'app/components/presentational/form/components/generic/styles';

/**
 * Presentational component to wrap a generic form input to provide icon and status underline
 */
export class FormInputComponent extends Component<FormInputComponentProps> {
	
	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			children
		} = this.props;

		return (
			<View style={this.getContainerStyle()}>
				<View style={styles.content}>
					{this.renderIcon()}
					{children}
				</View>
			</View>
		);
	}

	/**
	 * Helper to get the contatiner style(s) based on field status
	 * @returns the container style(s)
	 */
	private getContainerStyle(): StyleProp<ViewStyle> {

		const {
			status
		} = this.props;

		if(status === 'FOCUSED') {

			return [ styles.container, styles.containerFocus ];
		}
		else if(status === 'ERROR') {

			return [ styles.container, styles.containerError ];
		}
		else {

			return styles.container;
		}
	}

	/**
	 * Helper to render the input icon, if required
	 * @returns the rendered icon
	 */
	private renderIcon(): ReactNode {

		const {
			icon
		} = this.props;

		if(icon) {

			return (
				<ColoredImage
					source={icon}
					tintColor={config.ui.colors.colorFormInputs}
					style={styles.icon}
				/>
			);
		}
		else {
	
			return null;
		}
	}
}

/**
 * FormInputComponent's input props
 */
export type FormInputComponentInput = {

	/**
	 * The input icon
	 */
	icon?: ImageRequireSource;

	/**
	 * The current status of the form input
	 */
	status: CommonFormComponentStatus;
}

/**
 * FormInputComponent's output props
 */
export type FormInputComponentOutput = {

	/**
	 * Notifies input focus (input is currently active)
	 */
	onFocus: (event: unknown) => void;
	
	/**
	 * Notifies input blur (input is no longer active)
	 */
	onBlur: (event: unknown) => void;
}

/**
 * FormInputComponent's props
 */
export type FormInputComponentProps = FormInputComponentInput & FormInputComponentOutput;

/**
 * Describes the current status of the form input
 */
export type CommonFormComponentStatus = 'FOCUSED' | 'ERROR' | 'DEFAULT';
