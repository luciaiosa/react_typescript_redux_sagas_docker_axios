import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import App from './containers/app/App';
import * as serviceWorker from './serviceWorker';
import { rootReducers } from './reduxStore/reducers';
import saga from './sagas';

// add redux store devtools chrome extension
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// export function configureStore(initialState) {
//     const middleware = [sagaMiddleware];
   
//     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//     const store = createStore
//         (reducers, initialState, composeEnhancers(applyMiddleware(...middleware, logger)));
   
//     sagaMiddleware.run(saga);
   
//     return store;
//    }

// Initialize redux store. This store uses two middlewares: logger and SAGA. Redux-logger tool to inspect in console panel triggered actions and state of Redux store.
const store = createStore(
    rootReducers, 
    applyMiddleware(sagaMiddleware, logger)
    // composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
