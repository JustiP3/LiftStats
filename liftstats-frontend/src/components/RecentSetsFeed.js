import React, { Component } from 'react'

export default class RecentSetsFeed extends Component {

    renderSet = (workout) => {
        
        if (!!workout) {
            return(<li>{workout.workout_type} Weight: {workout.weight} Reps: {workout.reps}</li>)
        } else {
            return(<li>error</li>)
        }
        
    }

   render() {
     
        return (
        <div>
            <h1>Recent Sets:</h1>
            <ul>
                { this.props.recentWorkouts.map(work => this.renderSet(work)) }
              
            </ul>
        </div>
        );
   }
}
