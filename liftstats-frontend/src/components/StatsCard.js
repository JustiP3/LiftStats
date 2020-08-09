import React, { Component } from 'react'

export default class StatsCard extends Component {

    state={mostWeight: 0, mostReps: 0}

    componentDidMount() {
        fetch(`http://localhost:3000/users/1/workouts/${this.props.workout}/records`).then(resp => {
            return resp.json()
        }).then(json => {     
            return this.setState({mostReps: json.most_reps, mostWeight: json.most_weight})
        })
    }


    render() {
   
        return(
            <div key={this.props.workout} className="card">
                <h3>{this.props.workout}</h3>
                <p>Most Weight: {this.state.mostWeight.weight} for {this.state.mostWeight.reps} reps. ({this.state.mostWeight.created_at})</p>
                <p>Most Reps: {this.state.mostReps.reps} lifting {this.state.mostReps.weight} lbs. ({this.state.mostReps.created_at})</p>
            </div>
            
        )
    }
}