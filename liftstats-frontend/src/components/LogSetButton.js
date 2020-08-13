import React, { Component } from 'react'

export default class LogSetForm extends Component {
    render() {
        return(
            <button onClick={this.props.handleLogSetClick} style={{margin: 50}}><h1>Log New Set</h1></button>
        )
    }
}