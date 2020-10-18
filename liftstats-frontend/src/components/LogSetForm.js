import React, { Component } from 'react'
import { connect } from 'react-redux'

class LogSetForm extends Component {

    state={workoutType:"", weight:"", reps: ""}

    logSet = (workout) => {
        const configObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(workout)
        }        
        fetch(`http://localhost:3001/users/${this.props.userId}/workouts`, configObj).then(resp => {
            this.props.updateRecentWorkouts()
            this.props.handleCloseForm()            
        })
    }

    render() {

        const handleChange = (event) => {
            const {value, name} = event.target
            this.setState( {...this.state, [name]: value })
            
        }
      

        const handleSubmit = (event) => {    
            event.preventDefault()        
            this.logSet({user_id: this.props.userId, workout: this.state})
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

const mapStateToProps = state => ({userId: state.userId})

export default connect(mapStateToProps)(LogSetForm)