import React, { Component } from 'react'

export default class LogSetForm extends Component {

    state={workoutType:"", weight:0, reps: 0}

    render() {

        const handleChange = (event) => {
            const {value, name} = event.target
            this.setState( {...this.state, [name]: value })
            
        }
      

        const handleSubmit = (event) => {
            event.preventDefault()
            this.props.logSet({user_id: 1, workout: this.state})
        }

        return(
            <div>
                <h1>Log New Set</h1>
            <form onSubmit={handleSubmit} >
                <label>Workout Type</label>
                <input type="text" value={this.state.workoutType} onChange={handleChange} name="workoutType" /><br />
                <label>Weight</label>
                <input type="text" value={this.state.weight} onChange={handleChange} name="weight" /><br />
                <label>Reps</label>
                <input type="text" value={this.state.reps} onChange={handleChange} name="reps" /><br />
                <button type="subit">Submit</button>
            </form>
            <p>workout type: {this.state.workoutType}, weight: {this.state.weight},  reps: {this.state.reps}</p>
            </div>
        )
    }
}