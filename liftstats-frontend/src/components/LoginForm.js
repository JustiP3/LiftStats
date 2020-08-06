import React, { Component } from 'react'

export default class LoginForm extends Component {

    state={email:"", password:""}

    handleChange(event) {
        this.setState({})
    }

    handleSubmit(event) {
        event.preventDefault() 
        this.props.login(this.state.email)
    }
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


/*
import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    bandName: ''
  }

  handleOnChange(event) {
    this.setState({
      bandName: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addBand(this.state.bandName);
    this.setState({
      bandName: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.bandName}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

*/



