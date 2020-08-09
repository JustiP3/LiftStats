import React, { Component } from 'react'

export default class LoginForm extends Component {
   render() {
        return (
        <div>
            <h1>This form is not yet functional</h1>
            <form>
                <label>Email</label>
                <input type="text" />
                <button type="submit">Create Account</button>
            </form>
            <button onClick={this.props.handleCloseForm}>Cancel</button>
        </div>
        );
   }
}