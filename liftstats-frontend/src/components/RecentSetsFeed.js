import React, { Component } from 'react'

export default class RecentSetsFeed extends Component {
   render() {

    const renderSet = (workout) => {
        return(<li>{workout.workoutType} Weight: {workout.weight} Reps: {workout.reps}</li>)
    }
        return (
        <div>
            <h1>Recent Sets:</h1>
            <ul>
                {renderSet(this.props.recentSets)}
            </ul>
        </div>
        );
   }
}
