export default function manageWorkouts(state = {userId: "", set: {workout_type:"", weight: 0, reps: 0} }, action) {
    switch (action.type) {
      case 'LOG_SET':
   
        console.log(state.set.weight);   
        return state;
        
   
      default:
        return state;
    }
}