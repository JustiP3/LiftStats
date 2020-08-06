import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './containers/welcome'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" component={Welcome} />
    </Router>)
}

export default App;