import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css'
import App from './App';
import reducerAuth from './store/reducer/reducerAuth';
import reducerRepo from './store/reducer/reducerRepo';

// import axios from 'axios'
// window.axios = axios

//For using redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Combining reducers
const rootReducer = combineReducers({
    auth: reducerAuth,
    repo: reducerRepo
})
//SagaMiddleware
// const sagaMiddleware = createSagaMiddleware();

//store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(<Provider store = {store}><App /></Provider>
, document.getElementById('root'));
