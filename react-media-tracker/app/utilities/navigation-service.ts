import { AppError } from 'app/data/models/internal/error';
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

	/**
	 * Sets a navigation param
	 * @param route the route where to set the param
	 * @param key the param key
	 * @param value the param value
	 */
	public setParam(route: string, key: string, value: unknown): void {

		if(!this.navigator) {

			throw AppError.GENERIC.withDetails('Navigation service was not initialized');
		}

		this.navigator.dispatch(
			NavigationActions.setParams({
				key: route,
				params: {
					[key]: value
				}
			})
		);
	}
}

/**
 * Singleton implementation of the navigation service
 */
export const navigationService = new NavigationService();
