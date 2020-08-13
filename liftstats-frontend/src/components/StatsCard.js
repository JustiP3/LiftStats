import React, { Component } from 'react'
import MostWeightGivenReps from './MostWeightGivenReps'
import Charts from "./Charts"

export default class StatsCard extends Component {

    state={mostWeight: 0, mostReps: 0, mostWeightGivenReps:{reps:0, weight: 0}, allSets:[{id:"",user_id:"",workout_type:"",weight:"",created_at:null,updated_at:null,personal_record:null}]}

    componentDidMount() {
        fetch(`http://localhost:3000/users/1/workouts/${this.props.workout}/records`).then(resp => {
            return resp.json()
        }).then(json => {     
            return this.setState({...this.state, mostReps: json.most_reps, mostWeight: json.most_weight, allSets: json.all_sets})
        })
    }

    handleSubmitReps = (event) => {
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


    render() { 

        
        return(
            <div key={this.props.workout} className="card">
                <h2>{this.props.workout}</h2>
                <p><b>Personal Record</b> Most Weight: {this.state.mostWeight.weight} lbs.({this.state.mostWeight.created_at})</p>
                <p><b>Personal Record</b> Most Reps: {this.state.mostReps.reps} lifting {this.state.mostReps.weight} lbs. ({this.state.mostReps.created_at})</p>                
                <MostWeightGivenReps mostWeightGivenReps={this.state.mostWeightGivenReps} handleSubmitReps={this.handleSubmitReps} />
                <Charts allSets={this.state.allSets}/>
            </div>
            
        )
    }
}