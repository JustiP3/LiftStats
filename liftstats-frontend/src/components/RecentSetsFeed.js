import React, { Component } from 'react'

export default class RecentSetsFeed extends Component {
   render() {

    const renderSet = (set) => {
        return(<li>{set.workout_type} Weight: {set.weight} Reps: {set.reps}</li>)
    }
        return (
        <div>
            <ul>
                {this.props.recentSets.map(renderSet)}
            </ul>
        </div>
        );
   }
}