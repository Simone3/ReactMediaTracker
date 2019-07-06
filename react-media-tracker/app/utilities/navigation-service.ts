import { AppError } from 'app/models/internal/error';
import { NavigationActions, NavigationContainerComponent, NavigationParams } from 'react-navigation';

/**
 * Global class that can be used anywhere to navigate to a different app screen
 */
class NavigationService {

	private navigator?: NavigationContainerComponent;

	/**
	 * To be used ONLY by the top-level React Navigation component to save the navigator reference
	 * @param navigator the navigator reference
	 */
	public initialize(navigator: NavigationContainerComponent): void {
		
		if(this.navigator) {

			throw AppError.GENERIC.withDetails('Cannot initialize navigation service twice');
		}

		this.navigator = navigator;
	}

	/**
	 * Navigates to the given screen
	 * @param routeName the screen name
	 * @param params the optional screen parameters
	 */
	public navigate(routeName: string, params?: NavigationParams): void {

		if(!this.navigator) {

			throw AppError.GENERIC.withDetails('Navigation service was not initialized');
		}

		this.navigator.dispatch(
			NavigationActions.navigate({
				routeName,
				params
			})
		);
	}

	/**
	 * Navigates back the stack
	 */
	public back(): void {

		if(!this.navigator) {

			throw AppError.GENERIC.withDetails('Navigation service was not initialized');
		}

		this.navigator.dispatch(
			NavigationActions.back()
		);
	}
}

/**
 * Singleton implementation of the navigation service
 */
export const navigationService = new NavigationService();