import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import charactersSaga from "../reduxSaga/charactersSaga";
import episodesSaga from "../reduxSaga/episodesSaga";
import locationsSaga from "../reduxSaga/locationsSaga";
import {StoreState, InitialStoreState} from './storeStates';

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState:StoreState = InitialStoreState) {
 const middleware = [sagaMiddleware];

 const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
 const store = createStore
     (reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

 sagaMiddleware.run(charactersSaga);
 sagaMiddleware.run(episodesSaga);
 sagaMiddleware.run(locationsSaga);

 return store;
}