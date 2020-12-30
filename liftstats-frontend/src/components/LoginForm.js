import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Welcome from '../containers/Welcome'
import style from './components.css'

class LoginForm extends Component {

    state={email:"", loggingIn: false}

    handleChange = (event) => {
      const {value, name} = event.target
      this.setState( {...this.state, [name]: value })
    }
   
    render() {

      const handleSubmit = (event) => {
        event.preventDefault() 
        this.props.handleLogin(this.state.email.split(".")[0])        
        this.setState( {...this.state, loggingIn: true})         
      }

      if (this.state.loggingIn === false) {
        return (
          <div style={style.component}>
              <h1>Log In</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                  </div>
                  <button type='submit'>Log In</button>
              </form>
              <button onClick={this.props.handleCloseForm}>Cancel</button>
          </div>
          );
      } else {

        let loggedIn = false 
        if (this.props.displayName !== "Not Logged In" && this.props.displayName !== "Logging In") {
          loggedIn = true 
        }

        return (
        <Route exact path="/">
          {loggedIn ? <Redirect to="/dashboard" /> : <Welcome />}
        </Route>      
      )}      
    }
}


export default LoginForm