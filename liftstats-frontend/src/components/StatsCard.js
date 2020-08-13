import React, { Component } from 'react'
import MostWeightGivenReps from './MostWeightGivenReps'
import Charts from "./Charts"

export default class StatsCard extends Component {

    state={
        mostWeight: 0, 
        mostReps: 0, 
        mostWeightGivenReps:{reps:0, weight: 0}, 
        allSets:[{id:"",user_id:"",workout_type:"",weight:"",created_at:null,updated_at:null,personal_record:null}],
        showCharts: false, 
        showWeightGivenReps: false
    }

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

            if (!!json.most_weight_given_reps.reps && json.most_weight_given_reps.reps !==0) {              
                return this.setState({...this.state, mostWeightGivenReps:{reps:json.most_weight_given_reps[0].reps, weight:json.most_weight_given_reps[0].weight}})
            } else {
                return this.setState({...this.state, mostWeightGivenReps:{reps:"0", weight:"0"}})
            }           
            
        })
    }   

    handleClickShowCharts = (event) => {
        event.preventDefault()
        this.setState({...this.state, showCharts: true, showWeightGivenReps: false})
    }

    handleClickShowWeightGivenReps = (event) => {
        event.preventDefault()
        this.setState({...this.state, showCharts: false, showWeightGivenReps: true})
    }

    handleClose = (event) => {
        event.preventDefault()
        this.setState({...this.state, showCharts: false, showWeightGivenReps: false})
    }

    render() { 

        if (this.state.showCharts === true) {
            return(
                <div key={this.props.workout} className="container" style={{margin: 50 }}>
                    <h2>{this.props.workout}</h2>             
                    <Charts allSets={this.state.allSets} handleClose={this.handleClose}/>
                </div>            
            )
        } else if (this.state.showWeightGivenReps === true) {
            return(
                <div key={this.props.workout} className="container" style={{margin: 50 }} >
                    <h2>{this.props.workout}</h2>           
                    <MostWeightGivenReps mostWeightGivenReps={this.state.mostWeightGivenReps} handleSubmitReps={this.handleSubmitReps} handleClose={this.handleClose} />
                </div>            
            )
        } else {
            return(
                <div key={this.props.workout} className="container" style={{margin: 50 }}>
                    <h2>{this.props.workout}</h2>
                    <p><b>Personal Record</b> Most Weight: {this.state.mostWeight.weight} lbs.({this.state.mostWeight.created_at})</p>
                    <p><b>Personal Record</b> Most Reps: {this.state.mostReps.reps} lifting {this.state.mostReps.weight} lbs. ({this.state.mostReps.created_at})</p>                
                    <button onClick={this.handleClickShowWeightGivenReps}>View Most Weight by Reps</button>
                    <button onClick={this.handleClickShowCharts}>View Progress Chart</button>
                </div>   
            )
        }
        
        
    }
}









