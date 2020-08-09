import React, { Component } from 'react'
import MostWeightGivenReps from './MostWeightGivenReps'

export default class StatsCard extends Component {

    state={mostWeight: 0, mostReps: 0, mostWeightGivenReps:[{reps:0, weight: 0}]}

    componentDidMount() {
        fetch(`http://localhost:3000/users/1/workouts/${this.props.workout}/records`).then(resp => {
            return resp.json()
        }).then(json => {     
            return this.setState({...this.state, mostReps: json.most_reps, mostWeight: json.most_weight})
        })
    }

    


    render() {

        const handleSubmitReps = () => {
            fetch(`http://localhost:3000/users/1/workouts/${this.props.workout}/records/2`).then(resp => {
                return resp.json()
            }).then(json => {
                console.log(json.weight)
                return this.setState({...this.state, mostWeightGivenReps:[{reps:2, weight: json.weight}]})
            })
        }

        return(
            <div key={this.props.workout} className="card">
                <h3>{this.props.workout}</h3>
                <p>Most Weight: {this.state.mostWeight.weight} for {this.state.mostWeight.reps} reps. ({this.state.mostWeight.created_at})</p>
                <p>Most Reps: {this.state.mostReps.reps} lifting {this.state.mostReps.weight} lbs. ({this.state.mostReps.created_at})</p>
                <p>Most Weight for a given number of reps:</p>
                <MostWeightGivenReps handleSubmitReps={handleSubmitReps} />
            </div>
            
        )
    }
}