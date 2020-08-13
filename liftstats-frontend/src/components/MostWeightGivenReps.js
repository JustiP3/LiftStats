import React, { Component } from 'react'


export default class MostWeightGivenReps extends Component {

    render() {
        
        return(
            <div>    
                <button onClick={this.props.handleClose}>Back</button>                      
                <form onSubmit={this.props.handleSubmitReps}>
                <div className="form-group">
                    <label>Select Number of Reps</label>
                    <input type="number" name="reps" min="1" max="50" />
                    <button type="submit">Show Highest Weight Lifted for this Number of Reps</button>
                </div>
                   
                </form>
                
                <h4>{this.props.mostWeightGivenReps.weight} lbs. for {this.props.mostWeightGivenReps.reps} reps</h4>
            </div>
            
        )
    }
}