import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import manageWorkouts from './reducers/manageWorkouts'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';



let store = createStore(manageWorkouts, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


