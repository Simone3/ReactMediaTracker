import { rootReducer } from 'app/reducers/root';
import { rootSaga } from 'app/sagas/root';
import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

/**
 * Initializer for Redux and its middlewares
 * @returns the Redux store
 */
export const initializeRedux = (): Store => {

	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(rootSaga);

	return store;
};
