import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Welcome from './containers/Welcome'
import Dashboard from './containers/Dashboard'
import StatsDashboard from './containers/StatsDashboard'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'

class App extends Component {
  render() {

    const { dispatch, isAuthenticated, errorMessage } = this.props

    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />

      
        <Router>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/stats" component={StatsDashboard} />
        </Router>

      </div>
      )
    }
  }

// quote is from a tutorial and needs to be replaced with something relevant to this application 

function mapStateToProps(state) {

  const { quotes, auth } = state
  const { quote, authenticated } = quotes
  const { isAuthenticated, errorMessage } = auth

  return {
    quote,
    isSecretQuote: authenticated,
    isAuthenticated,
    errorMessage
  }
}


export default connect(mapStateToProps)(App)