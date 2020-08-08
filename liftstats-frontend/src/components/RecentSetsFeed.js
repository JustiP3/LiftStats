import React, { Component } from 'react'

export default class RecentSetsFeed extends Component {

    renderSet = (workout) => {
        
        if (!!workout) {
        
            return(<li key={workout.id}> {workout.workout_type} Weight: {workout.weight} Reps: {workout.reps}</li> )
        } else {
            return(<li key={0}>error</li>)
        }
        
    }

   render() {
     
        return (
        <div>
            <h1 key="title">Recent Sets:</h1>
            <ul key="list">
                { this.props.recentWorkouts.map(work => this.renderSet(work)) }
              
            </ul>
        </div>
        );
   }
}
