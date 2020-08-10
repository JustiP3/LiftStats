import React, { Component } from 'react'

export default class LogSetForm extends Component {

    state={workoutType:"", weight:"", reps: ""}

    render() {

        const handleChange = (event) => {
            const {value, name} = event.target
            this.setState( {...this.state, [name]: value })
            
        }
      

        const handleSubmit = (event) => {
            
            this.props.logSet({user_id: 1, workout: this.state})
        }

        return(
            <div>
                <h1>Log New Set   <button onClick={this.props.handleCloseForm}>X</button></h1>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label>Workout Type</label>
                    <input type="text" value={this.state.workoutType} onChange={handleChange} name="workoutType" />
                </div>
                <div className="form-group">
                    <label>Weight   </label>
                    <input type="text" value={this.state.weight} onChange={handleChange} name="weight" />
                </div>
                <div className="form-group">                
                <label>Reps   </label>                
                <input type="text" value={this.state.reps} onChange={handleChange} name="reps" />
                </div>
                <div className="form-group">
                <button type="subit">Submit</button>
                </div>
            </form>
            </div>
        )
    }
}