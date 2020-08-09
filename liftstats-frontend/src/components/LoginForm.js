import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class LoginForm extends Component {

    state={email:"", password:""}

    handleChange = (event) => {
      const {value, name} = event.target
      this.setState( {...this.state, [name]: value })
      
    }

    handleSubmit(event) {
        event.preventDefault() 
        
        
    }

    render() {
            return (
            <div>
                <h1>Log In</h1>
                <form>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <label>password</label>
                      <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <button><NavLink to="/dashboard">Log In</NavLink></button>
                </form>
                <button onClick={this.props.handleCloseForm}>Cancel</button>
            </div>
            );
    }
}

