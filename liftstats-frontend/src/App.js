import React from 'react'

import Welcome from './containers/Welcome'
import Dashboard from './containers/Dashboard'
import StatsDashboard from './containers/StatsDashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


const App = () => {
 

 

    return (
 
        <Router>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/stats" component={StatsDashboard} />
        </Router>

    
      )
    
  }




export default App