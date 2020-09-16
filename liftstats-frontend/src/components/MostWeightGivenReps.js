import React from 'react'


function MostWeightGivenReps(props) {
    return(
        <div>    
            <button onClick={props.handleClose}>Back</button>                      
            <form onSubmit={props.handleSubmitReps}>
            <div className="form-group">
                <label>Select Number of Reps</label>
                <input type="number" name="reps" min="1" max="50" />
                <button type="submit">Show Highest Weight Lifted for this Number of Reps</button>
            </div>
               
            </form>
            
            <h4>{props.mostWeightGivenReps.weight} lbs. for {props.mostWeightGivenReps.reps} reps</h4>
        </div>
        
    )
}

export default MostWeightGivenReps