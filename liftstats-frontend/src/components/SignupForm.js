import React, { Component } from 'react'


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
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" name="email" value={this.state.email}  onChange={this.handleChange} />
                <label>Display Name</label>
                <input type="text" name="displayName" value={this.state.displayName}  onChange={this.handleChange} />
                <button type="submit">Create Account</button>
            </form>
            <button onClick={this.props.handleCloseForm}>Cancel</button>
        </div>
        )
      } else {
          return(<h1>Signing Up! Hang Tight</h1>)
      }
   }
}

  export default SignupForm