export default function manageWorkouts(state = {
    userId: "", 
    set: {workout_type:"", weight: 0, reps: 0, date:""}, 
}, action) {
    switch (action.type) {
      case 'LOG_SET':
   
        console.log({ /*action.set.weight*/ });
   
        return { /*todos: state.todos.concat(action.payload.text)*/ };
   
      default:
        return state;
    }
}