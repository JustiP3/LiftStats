import React, { Component } from 'react'

export default class StatsCard extends Component {

    state={mostWeight: 0, mostReps: 0}

    componentDidMount() {
        fetch(`http://localhost:3000/users/1/workouts/${this.props.workout}/records`).then(resp => {
            return resp.json()
        }).then(json => {     
            this.setState({...this.state, mostWeight: json.most_weight})
        })
    }


    render() {
   
        return(
            <div key={this.props.workout}>
                <h3>{this.props.workout}</h3>
                <p>Most Weight: {this.state.mostWeight}</p>
                <p>Most Reps: {this.state.mostReps}</p>
            </div>
            
        )
    }
}