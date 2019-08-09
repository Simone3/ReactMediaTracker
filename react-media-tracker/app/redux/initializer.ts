import { rootReducer } from 'app/redux/reducers/root';
import { rootSaga } from 'app/redux/sagas/root';
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
