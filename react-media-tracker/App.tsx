import React, {Component, ReactNode} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootComponent } from './src/components/RootComponent';
import rootReducer from './src/reducers';

const store = createStore(rootReducer);

/**
 * App entry point
 */
export default class App extends Component {

	render(): ReactNode {
		return (
			<Provider store={store}>
				<RootComponent/>
			</Provider>
		);
	}
}

