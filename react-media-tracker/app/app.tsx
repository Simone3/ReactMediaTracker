import React, { Component, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { initializeRedux } from 'app/initializers/redux';
import { AppNavigationContainer } from 'app/containers/navigation';

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
				<AppNavigationContainer/>
			</Provider>
		);
	}
}

