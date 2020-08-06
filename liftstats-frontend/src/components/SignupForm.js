import React, { Component } from 'react'

export default class LoginForm extends Component {
   render() {
        return (
        <div>
            <form>
                <input type="text" />
                <button type="submit">Login</button>
            </form>
            <button onClick={this.props.handleCloseForm}>Cancel</button>
        </div>
        );
   }
}