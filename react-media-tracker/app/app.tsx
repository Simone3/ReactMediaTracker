import React, { Component, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { initializeRedux } from 'app/redux/initializer';
import { AppNavigationContainer } from 'app/components/containers/generic/navigation';
import { navigationService } from 'app/utilities/navigation-service';
import { ErrorHandlerContainer } from 'app/components/containers/generic/error-handler';
import { StatusBar } from 'react-native';

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
				<ErrorHandlerContainer>
					<StatusBar barStyle='light-content' />
					<AppNavigationContainer
						ref={(navigatorRef) => {
							if(!navigatorRef) {
								return;
							}
							navigationService.initialize(navigatorRef);
						}}/>
				</ErrorHandlerContainer>
			</Provider>
		);
	}
}

