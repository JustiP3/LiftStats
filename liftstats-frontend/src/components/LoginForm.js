import React, { Component } from 'react'


class LoginForm extends Component {

    state={email:"", password:"", loggingIn: false}

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
          <div>
              <h1>Log In</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label>password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                  </div>
                  <button type='submit'>Log In</button>
              </form>
              <button onClick={this.props.handleCloseForm}>Cancel</button>
          </div>
          );
      } else {
        return (<h1>Logging In ...</h1>)
      }
            
    }
}


export default LoginForm