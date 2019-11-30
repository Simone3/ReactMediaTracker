import React, { Component, ReactNode } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from 'app/components/presentational/auth/signup/screen/styles';
import { UserSecretInternal } from 'app/data/models/internal/user';
import { LoadingIndicatorComponent } from 'app/components/presentational/generic/loading-indicator';
import { navigationService } from 'app/utilities/navigation-service';
import { i18n } from 'app/utilities/i18n';

/**
 * Presentational component that contains the add new user form
 */
export class UserSignupScreenComponent extends Component<UserSignupScreenComponentProps, UserSecretInternal> {
	
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
	 * Helper to render the simple signup form
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
					placeholder={i18n.t('auth.signup.placeholders.name')}
					style={styles.formInput}
				/>
				<Button
					title={i18n.t('auth.signup.buttons.submit')}
					disabled={!this.state.name}
					onPress={() => {
						this.props.signup(this.state);
					}}
				/>
				<Button
					title={i18n.t('auth.signup.buttons.alreadyUser')}
					onPress={() => {
						navigationService.back();
					}}
				/>
			</View>
		);
	}
}

/**
 * UserSignupScreenComponent's input props
 */
export type UserSignupScreenComponentInput = {

	/**
	 * Flag to tell if the component is currently waiting on an async operation. If true, shows the loading screen.
	 */
	isLoading: boolean;
}

/**
 * UserSignupScreenComponent's output props
 */
export type UserSignupScreenComponentOutput = {

	/**
	 * Callback for the signup attempt
	 */
	signup: (user: UserSecretInternal) => void;
}

/**
 * UserSignupScreenComponent's props
 */
export type UserSignupScreenComponentProps = UserSignupScreenComponentInput & UserSignupScreenComponentOutput;
