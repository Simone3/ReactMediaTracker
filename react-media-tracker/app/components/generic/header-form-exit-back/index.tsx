import React, { Component, ReactNode } from 'react';
import { Alert, AlertButton, AlertOptions, BackHandler } from 'react-native';
import { HeaderBackButton, NavigationScreenProp, NavigationEventSubscription } from 'react-navigation';
import { i18n } from 'app/lang/lang';

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

		return (
			<HeaderBackButton
				onPress={this.onBackButtonPress}
				tintColor='white'
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
			dirtyForm,
			navigation
		} = this.props;

		if(dirtyForm) {

			this.showAlert();
		}
		else {

			navigation.goBack();
		}
	}

	/**
	 * Shows the confirmation alert
	 */
	private showAlert(): void {

		const title = i18n.t('common.alert.form.exit.title');

		const message = i18n.t('common.alert.form.exit.message');

		const cancelButton: AlertButton = {
			text: i18n.t('common.alert.form.exit.cancelButton'),
			style: 'cancel'
		};

		const okButton: AlertButton = {
			text: i18n.t('common.alert.form.exit.okButton'),
			onPress: () => {

				this.props.navigation.goBack();
			}
		};

		const options: AlertOptions = {
			cancelable: false
		};

		Alert.alert(title, message, [ cancelButton, okButton ], options);
	}
}

/**
 * HeaderFormExitBackComponent's input props
 */
export type HeaderFormExitBackComponentInput = {

	/**
	 * The navigation data
	 */
	navigation: NavigationScreenProp<object>;

	/**
	 * If the form is dirty, i.e. if the confirmation alert is required
	 */
	dirtyForm: boolean;
}
