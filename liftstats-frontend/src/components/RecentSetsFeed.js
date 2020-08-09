import React, { Component } from 'react'

export default class RecentSetsFeed extends Component {

    renderSet = (workout) => {
        
        if (!!workout && workout.personal_record === true) {
        
            return(<div key={workout.id} className="card"> {workout.workout_type} Weight: {workout.weight} Reps: {workout.reps} (New Personal Record!)</div> )
        } else if (!!workout) {
            return(<div key={workout.id} className="card"> {workout.workout_type} Weight: {workout.weight} Reps: {workout.reps} </div> )
        } else {
            return(<div key={0} className="card">error</div>)
        }
        
    }

   render() {
     
        return (
        <div>
            <h1 key="title">Recent Sets:</h1>
           
                { this.props.recentWorkouts.map(work => this.renderSet(work)) }
              
          
        </div>
        );
   }
}
