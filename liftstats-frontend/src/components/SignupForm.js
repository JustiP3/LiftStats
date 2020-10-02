import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Welcome from '../containers/Welcome'


class SignupForm extends Component {

    state={email:"", displayName: "", loggingIn: false}

    handleChange = (event) => {
      const {value, name} = event.target
      this.setState( {...this.state, [name]: value })
    }

   render() {

    const handleSubmit = (event) => {
        event.preventDefault() 
        const email = this.state.email.split(".")[0]
        const displayName = this.state.displayName
        const info = email + "-----" + displayName
        this.props.handleSignup(info)        
        this.setState( {...this.state, loggingIn: true})         
      }

      if (this.state.loggingIn === false) {
        return (
        <div className="align-items-center">
          <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" name="email" value={this.state.email}  onChange={this.handleChange} /><br />
                <label>Display Name</label>
                <input type="text" name="displayName" value={this.state.displayName}  onChange={this.handleChange} />
                <button type="submit">Create Account</button>
            </form>
            <button onClick={this.props.handleCloseForm}>Cancel</button>
        </div>
        )
      } else {

        let loggedIn = false 
        if (!!this.props.displayName) {
          loggedIn = true 
        }

        if (!!this.props.displayName || !!this.props.error) {
            return (
                <Route exact path="/">
                  {loggedIn ? <Redirect to="/dashboard" /> : <Welcome />}
                </Route> 
            )
        } else {
            return(<h1>Logging In! Hang Tight</h1>)
        }
        
             
      }
    
      
   }
}

  export default SignupForm