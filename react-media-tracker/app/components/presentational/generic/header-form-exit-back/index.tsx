import React, { Component, ReactNode } from 'react';
import { BackHandler } from 'react-native';
import { NavigationEventSubscription, NavigationScreenProp } from 'react-navigation';
import { ConfirmAlert } from 'app/components/presentational/generic/confirm-alert';
import { i18n } from 'app/utilities/i18n';
import { HeaderBackComponent } from 'app/components/presentational/generic/header-back';

/**
 * Presentational component to display the header back button for a form, with built-in alert on click if the form is dirty.
 * Also handles "physical" back button on Android in the same way.
 */
export class HeaderFormExitBackComponent extends Component<HeaderFormExitBackComponentInput> {
	
	private didFocusSubscription?: NavigationEventSubscription;
	private willBlurSubscription?: NavigationEventSubscription;
	
	/**
	 * @override
	 */
	public constructor(props: HeaderFormExitBackComponentInput) {
		
		super(props);

		this.onPhysicalBackButtonPressAndroid = this.onPhysicalBackButtonPressAndroid.bind(this);
		this.onBackButtonPress = this.onBackButtonPress.bind(this);

		// Add listener for "physical" back button on Android
		this.didFocusSubscription = props.navigation.addListener('didFocus', () => {

			BackHandler.addEventListener('hardwareBackPress', this.onPhysicalBackButtonPressAndroid);
		});
	}
	
	/**
	 * @override
	 */
	public componentDidMount(): void {

		// Add listener for "physical" back button on Android
		this.willBlurSubscription = this.props.navigation.addListener('willBlur', () => {
			
			BackHandler.removeEventListener('hardwareBackPress', this.onPhysicalBackButtonPressAndroid);
		});
	}

	/**
	 * @override
	 */
	public componentWillUnmount(): void {
		
		// Release listeners for "physical" back button on Android
		if(this.didFocusSubscription) {

			this.didFocusSubscription.remove();
		}
		if(this.willBlurSubscription) {

			this.willBlurSubscription.remove();
		}
	}

	/**
	 * @override
	 */
	public render(): ReactNode {

		const {
			disabled
		} = this.props;

		return (
			<HeaderBackComponent
				onClick={this.onBackButtonPress}
				disabled={disabled}
			/>
		);
	}

	/**
	 * Action on back button press for the "physical" button on Android
	 * @returns always true: back behaviour always handled internally
	 */
	private onPhysicalBackButtonPressAndroid(): boolean {

		this.onBackButtonPress();
		return true;
	}

	/**
	 * Action on back button press (both header button and "physical" button on Android)
	 */
	private onBackButtonPress(): void {

		const {
			disabled,
			dirtyForm,
			navigation
		} = this.props;

		if(disabled) {

			return;
		}

		if(dirtyForm) {

			ConfirmAlert.alert(i18n.t('common.alert.form.exit.title'), i18n.t('common.alert.form.exit.message'), () => {

				navigation.goBack();
			});
		}
		else {

			navigation.goBack();
		}
	}
}

/**
 * HeaderFormExitBackComponent's input props
 */
export type HeaderFormExitBackComponentInput = {

	/**
	 * The navigation data
	 */
	navigation: NavigationScreenProp<unknown>;

	/**
	 * If the form is dirty, i.e. if the confirmation alert is required
	 */
	dirtyForm: boolean;

	/**
	 * If the button is not currently clickable
	 */
	disabled?: boolean;
}
