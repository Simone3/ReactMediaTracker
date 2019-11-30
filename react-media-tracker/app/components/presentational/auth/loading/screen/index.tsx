import React, { Component, ReactNode } from 'react';
import { navigationService } from 'app/utilities/navigation-service';
import { AppSections } from 'app/utilities/screens';
import { LoadingIndicatorComponent } from 'app/components/presentational/generic/loading-indicator';

/**
 * Presentational component that contains the app landing page that checks for user authentication and then redirects to the correct flow
 */
export class AuthLoadingScreenComponent extends Component<AuthLoadingScreenComponentProps> {
	
	/**
	 * @override
	 */
	public componentDidMount(): void {
		
		this.props.fetchLoginStatus();
	}

	/**
	 * @override
	 */
	public componentDidUpdate(): void {

		const {
			isLoggedIn
		} = this.props;

		if(isLoggedIn !== undefined) {

			navigationService.navigate(isLoggedIn ? AppSections.Authenticated : AppSections.Unauthenticated);
		}
	}

	/**
	 * @override
	 */
	public render(): ReactNode {

		return (
			<LoadingIndicatorComponent
				visible={true}
				fullScreen={false}
			/>
		);
	}
}

/**
 * AuthLoadingScreenComponent's input props
 */
export type AuthLoadingScreenComponentInput = {

	/**
	 * Tells if the current user is logged in.
	 * * undefined = waiting for user status
	 * * true = authenticated
	 * * false = not authenticated
	 */
	isLoggedIn: boolean | undefined;
}

/**
 * AuthLoadingScreenComponent's output props
 */
export type AuthLoadingScreenComponentOutput = {

	/**
	 * Callback to request the user login status
	 */
	fetchLoginStatus: () => void;
}

/**
 * AuthLoadingScreenComponent's props
 */
export type AuthLoadingScreenComponentProps = AuthLoadingScreenComponentInput & AuthLoadingScreenComponentOutput;
