import React, { Component } from 'react'
import StatsCard from '../components/StatsCard'

export default class StatsCardContainer extends Component {

    state={workoutTypes: []}

    componentDidMount() {
        fetch('http://localhost:3000/users/1/workouts/types').then(resp => {
            return resp.json()
        }).then(json => {    
             
            return this.setState({workoutTypes: json.workout_types})
        })
    }

    renderCards() {
        if (!!this.state.workoutTypes && this.state.workoutTypes.length > 0) {
            return this.state.workoutTypes.map(workout => <StatsCard key={workout} workout={workout}/>)
        } else {
            return <div>Error in Render Cards</div>
        }
    }
    
    render() { 
        return(
        <div className="container">
           {this.renderCards()}
        </div>
        )
    }
 
}


     