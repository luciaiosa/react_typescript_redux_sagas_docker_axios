import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import App_Functional_Component from "./App_functional_component.tsx";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import saga from 'redux-saga';

const store = createStore(reducers, applyMiddleware(saga));

ReactDOM.render(<App color="red"/>, document.getElementById('root'));
// ReactDOM.render(<App_Functional_Component color="red"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
