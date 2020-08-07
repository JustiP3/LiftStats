import React, { Component } from 'react'

export default class LogSetForm extends Component {

    state={workoutType:"", weight:0, reps: 0}

    render() {

        const handleChange = (event) => {
            const {value, name} = event.target
            this.setState( {...this.state, [name]: [value] })
            
        }
      

        const handleSubmit = (event) => {
            event.preventDefault()
            console.log("log workout submit")
        }

        return(
            <div>
            <form onSubmit={handleSubmit} >
                <label>Workout Type</label>
                <input type="text" value={this.state.workoutType} onChange={handleChange} name="workoutType" />
                <label>Weight</label>
                <input type="text" value={this.state.weight} onChange={handleChange} name="weight" />
                <label>Reps</label>
                <input type="text" value={this.state.reps} onChange={handleChange} name="reps" />
                <button type="subit">Submit</button>
            </form>
            <p>workout type: {this.state.workoutType}, weight: {this.state.weight},  reps: {this.state.reps}</p>
            </div>
        )
    }
}