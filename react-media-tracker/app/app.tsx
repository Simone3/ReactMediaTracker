import React, { Component, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { RootComponent } from 'app/components/root';
import { initializeRedux } from 'app/initializers/redux';

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
				<RootComponent/>
			</Provider>
		);
	}
}

