import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './containers/Welcome'
import Dashboard from './containers/Dashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Router>)
}

export default App;