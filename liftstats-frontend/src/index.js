import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import manageWorkouts from './reducers/manageWorkouts'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';



let store = createStore(manageWorkouts)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
