import React, { Component } from 'react'

export default class RecentSetsFeed extends Component {
   render() {

    const renderSet = (workout) => {
        if (!!workout && !!workout.workoutType) {
            return(<li>{workout.workoutType} Weight: {workout.weight} Reps: {workout.reps}</li>)
        } else {
            return <li>error</li>
        }
        
    }
        return (
        <div>
            <h1>Recent Sets:</h1>
            <ul>
                {/*this.props.recentSets.map(workout => renderSet(workout) )*/ renderSet(this.props.recentSets)}
              
            </ul>
        </div>
        );
   }
}
