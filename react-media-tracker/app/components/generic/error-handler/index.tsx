import React, { Component, ReactNode } from 'react';
import { AppError } from 'app/models/internal/error';
import FlashMessage, { showMessage } from 'react-native-flash-message';
import { View } from 'react-native';
import { styles } from 'app/components/generic/error-handler/styles';
import { i18n } from 'app/lang/lang';

/**
 * Simple wrapper presentational component that handles global errors
 */
export class ErrorHandlerComponent extends Component<ErrorHandlerComponentInput & ErrorHandlerComponentOutput> {
	
	/**
	 * @override
	 */
	public componentDidUpdate(): void {

		const {
			error
		} = this.props;

		if(error) {

			const messageDescription = typeof error === 'string' ? error : i18n.t(error.errorDescription);

			showMessage({
				message: i18n.t('error.flash.title'),
				description: messageDescription,
				type: 'danger',
				duration: 3000
			});

			this.props.clearError();
		}
	}

	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<View style={styles.container}>
				{this.props.children}
				<FlashMessage position='bottom' />
			</View>
		);
	}
}

/**
 * ErrorHandlerComponent's input props
 */
export type ErrorHandlerComponentInput = {

	/**
	 * The error to be displayed, if any
	 */
	error?: AppError | string;
};

/**
 * ErrorHandlerComponent's output props
 */
export type ErrorHandlerComponentOutput = {

	/**
	 * Callback to clear the error from the global state
	 */
	clearError: () => void;
};

