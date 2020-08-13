import React, { Component } from 'react'

export default class LogSetForm extends Component {

    state={workoutType:"", weight:"", reps: ""}

    logSet = (workout) => {
        console.log("log set action - about to send a post request via fetch")
        const configObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(workout)
        }
        
        fetch('http://localhost:3000/users/1/workouts', configObj)
    }

    render() {

        const handleChange = (event) => {
            const {value, name} = event.target
            this.setState( {...this.state, [name]: value })
            
        }
      

        const handleSubmit = () => {            
            this.logSet({user_id: 1, workout: this.state})
        }

        return(

            <div style={{textAlign: 'center'}}>
                <h1>Log New Set   <button onClick={this.props.handleCloseForm}>X</button></h1>

            <form onSubmit={handleSubmit} >
                
                    <label>Workout Type</label>
                    <input type="text" value={this.state.workoutType} onChange={handleChange} name="workoutType" />
               
            
                    <label>Weight   </label>
                    <input type="text" value={this.state.weight} onChange={handleChange} name="weight" />
                             
                <label>Reps   </label>                
                <input type="text" value={this.state.reps} onChange={handleChange} name="reps" />
            
               
                <button type="subit">Submit</button>
           
            </form>
            </div>
        )
    }
}