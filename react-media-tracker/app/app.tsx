import React, { Component, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { initializeRedux } from 'app/initializers/redux';
import { AppNavigationContainer } from 'app/containers/navigation';
import { navigationService } from 'app/utilities/navigation-service';

// Initialize app components
const store = initializeRedux();

/**
 * App entry point
 */
export class App extends Component {

	/**
	 * @override
	 */
	public render(): ReactNode {
		
		return (
			<Provider store={store}>
				<AppNavigationContainer
					ref={(navigatorRef) => {

						if(!navigatorRef) {
							throw new Error('Unexpected null navigator reference');
						}

						navigationService.initialize(navigatorRef);
					}}/>
			</Provider>
		);
	}
}

