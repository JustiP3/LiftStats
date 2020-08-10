import React, { Component } from 'react'
import MostWeightGivenReps from './MostWeightGivenReps'

export default class StatsCard extends Component {

    state={mostWeight: 0, mostReps: 0, mostWeightGivenReps:{reps:0, weight: 0}}

    componentDidMount() {
        fetch(`http://localhost:3000/users/1/workouts/${this.props.workout}/records`).then(resp => {
            return resp.json()
        }).then(json => {     
            return this.setState({...this.state, mostReps: json.most_reps, mostWeight: json.most_weight})
        })
    }

    


    render() {

        const handleSubmitReps = (event) => {
            event.preventDefault() 

            const reps = event.target.reps.value 
        
            fetch(`http://localhost:3000/users/1/workouts/${this.props.workout}/records/${reps}`).then(resp => {
                return resp.json()
            }).then(json => {  
 
                if (!!json.most_weight_given_reps) {                
                    return this.setState({...this.state, mostWeightGivenReps:{reps:json.most_weight_given_reps.reps, weight:json.most_weight_given_reps.weight}})
                } else {
                    return this.setState({...this.state, mostWeightGivenReps:{reps:"N/A", weight:"0"}})
                }           
                
            })
        }

        return(
            <div key={this.props.workout} className="card">
                <h2>{this.props.workout}</h2>
                <p>Most Weight: {this.state.mostWeight.weight} lbs.({this.state.mostWeight.created_at})</p>
                <p>Most Reps: {this.state.mostReps.reps} lifting {this.state.mostReps.weight} lbs. ({this.state.mostReps.created_at})</p>                
                <MostWeightGivenReps mostWeightGivenReps={this.state.mostWeightGivenReps} handleSubmitReps={handleSubmitReps} />
            </div>
            
        )
    }
}