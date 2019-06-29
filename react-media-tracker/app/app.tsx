import React, { Component, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { initializeRedux } from 'app/initializers/redux';
import { AppNavigationContainer } from 'app/containers/generic/navigation';
import { navigationService } from 'app/utilities/navigation-service';
import { AppError } from 'app/models/internal/error';
import { ErrorHandlerContainer } from 'app/containers/generic/error-handler';

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
					<AppNavigationContainer
						ref={(navigatorRef) => {
							if(!navigatorRef) {
								throw AppError.GENERIC.withDetails('Unexpected null navigator reference');
							}
							navigationService.initialize(navigatorRef);
						}}/>
				</ErrorHandlerContainer>
			</Provider>
		);
	}
}

