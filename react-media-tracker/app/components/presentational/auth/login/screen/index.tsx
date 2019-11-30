import React, { Component, ReactNode } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from 'app/components/presentational/auth/login/screen/styles';
import { UserSecretInternal } from 'app/data/models/internal/user';
import { LoadingIndicatorComponent } from 'app/components/presentational/generic/loading-indicator';
import { navigationService } from 'app/utilities/navigation-service';
import { i18n } from 'app/utilities/i18n';
import { AppScreens } from 'app/utilities/screens';

/**
 * Presentational component that contains the add new user form
 */
export class UserLoginScreenComponent extends Component<UserLoginScreenComponentProps, UserSecretInternal> {
	
	public state: UserSecretInternal = {
		name: ''
	};

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<View style={styles.container}>
				{this.renderForm()}
				<LoadingIndicatorComponent
					visible={this.props.isLoading}
					fullScreen={true}
				/>
			</View>
		);
	}

	/**
	 * Helper to render the simple login form
	 * @returns the component
	 */
	private renderForm(): ReactNode {

		return (
			<View style={styles.formContainer}>
				<TextInput
					onChangeText={(value) => {
						this.setState({
							name: value
						});
					}}
					value={this.state.name}
					placeholder={i18n.t('auth.login.placeholders.name')}
					style={styles.formInput}
				/>
				<Button
					title={i18n.t('auth.login.buttons.submit')}
					disabled={!this.state.name}
					onPress={() => {
						this.props.login(this.state);
					}}
				/>
				<Button
					title={i18n.t('auth.login.buttons.notUser')}
					onPress={() => {
						navigationService.navigate(AppScreens.UserSignup);
					}}
				/>
			</View>
		);
	}
}

/**
 * UserLoginScreenComponent's input props
 */
export type UserLoginScreenComponentInput = {

	/**
	 * Flag to tell if the component is currently waiting on an async operation. If true, shows the loading screen.
	 */
	isLoading: boolean;
}

/**
 * UserLoginScreenComponent's output props
 */
export type UserLoginScreenComponentOutput = {

	/**
	 * Callback for the login attempt
	 */
	login: (user: UserSecretInternal) => void;
}

/**
 * UserLoginScreenComponent's props
 */
export type UserLoginScreenComponentProps = UserLoginScreenComponentInput & UserLoginScreenComponentOutput;
