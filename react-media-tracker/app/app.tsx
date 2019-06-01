import React, { Component, ReactNode } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'app/reducers/root';
import { RootComponent } from 'app/components/root';
import { rootSaga } from 'app/sagas/root';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

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

