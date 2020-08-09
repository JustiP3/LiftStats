import React, { Component } from 'react'


export default class MostWeightGivenReps extends Component {




    


    render() {

  

        return(
            <div>
                <form onSubmit={this.props.handleSubmitReps}>
                <div className="form-group">
                    <label>Select Number of Reps</label>
                    <input type="number" name="reps" min="1" max="50" />
                </div>
                    <button type="submit">Show Highest Weight Lifted for this Number of Reps</button>
                </form>
            </div>
            
        )
    }
}