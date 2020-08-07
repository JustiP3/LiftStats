import React, { Component } from 'react'

export default class RecentSetsFeed extends Component {
   render() {

    const renderSet = (set) => {
        return(<li key={set.datecode}>{set.workoutType} Weight: {set.weight} Reps: {set.reps}</li>)
    }
        return (
        <div>
            <h1>Recent Sets:</h1>
            <ul>
                {this.props.recentSets.map(renderSet)}
            </ul>
        </div>
        );
   }
}