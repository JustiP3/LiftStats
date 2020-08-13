import React, { Component } from 'react'

export default class RecentSetsFeed extends Component {

    renderSet = (workout) => {
        
        if (!!workout && workout.personal_record === true) {        
            return(<div key={workout.id} className="card"  style={{margin: 50 }}> <h3>{workout.workout_type} </h3> 
            Weight: {workout.weight} Reps: {workout.reps} (New Personal Record!) - {workout.created_at}</div> )
        } else if (!!workout) {
            return(<div key={workout.id} className="card"  style={{margin: 50 }}> <h3>{workout.workout_type} </h3> 
            Weight: {workout.weight} Reps: {workout.reps} - {workout.created_at} </div> )
        } else {
            return(<div key={0} className="card"  style={{margin: 50 }}>error</div>)
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
