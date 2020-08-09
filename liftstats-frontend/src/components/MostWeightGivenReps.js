import React, { Component } from 'react'


export default class MostWeightGivenReps extends Component {




    


    render() {

  

        return(
            <div>    
                <h3>Most Weight Lifted for a Given Rep Range (select a rep range)</h3>            
                <form onSubmit={this.props.handleSubmitReps}>
                <div className="form-group">
                    <label>Select Number of Reps</label>
                    <input type="number" name="reps" min="1" max="50" />
                </div>
                    <button type="submit">Show Highest Weight Lifted for this Number of Reps</button>
                </form>
                <h4>Reps: {this.props.mostWeightGivenReps.reps}, Weight: {this.props.mostWeightGivenReps.weight}</h4>
            </div>
            
        )
    }
}