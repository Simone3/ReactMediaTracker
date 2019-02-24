import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootComponent } from './src/components/RootComponent';
import rootReducer from './src/reducers';

const store = createStore(rootReducer);

export default class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<RootComponent/>
			</Provider>
		);
	}
}

