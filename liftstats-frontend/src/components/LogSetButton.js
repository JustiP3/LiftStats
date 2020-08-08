import React, { Component } from 'react'

export default class LogSetForm extends Component {
    render() {
        return(
            <button onClick={this.props.handleLogSetClick}>Log New Set</button>
        )
    }
}