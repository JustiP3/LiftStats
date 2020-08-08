import React, { Component } from 'react'

export default class StatsCard extends Component {
    render() {
   
        return(
            <h3 key={this.props.workout}>Stats Card: {this.props.workout}</h3>
            
        )
    }
}