import createSagaMiddleware from "redux-saga";
import { Store, createStore, applyMiddleware, compose } from "redux";
import { AppStore, initialAppStore } from "./app/AppStore";
import { rootReducer } from "./RootReducer";
import { rootSaga } from "./RootSaga";
import { logger } from 'redux-logger';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
// add redux store devtools chrome extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

function configureStore(initialStoreState: AppStore): Store<AppStore> {

    // Initialize redux store. This store uses two middlewares: logger and SAGA. Redux-logger tool to inspect in console panel triggered actions and state of Redux store.
    const store = createStore(rootReducer, initialStoreState, composeEnhancers(applyMiddleware(sagaMiddleware, logger)));
    return store;
}

export const store = configureStore(initialAppStore);

sagaMiddleware.run(rootSaga);