export default function manageWorkouts(state = {userId: "", recentWorkouts: []}, action) {
  //{workout_type:"", weight: 0, reps: 0} 
    switch (action.type) {
      case 'LOG_SET':

        console.log("log set action - about to send a post request via fetch")
        const configObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(action.workout)
        }
        
        return fetch('http://localhost:3000/users/1/workouts', configObj).then((response) => {
          return response.json();
        }).then((json) => {
          console.log(json)  //can probably delete this soon 
          if (state.recentWorkouts.length > 0) {
            return {...state, recentWorkouts: [...state.recentWorkouts, json]}
          } else {
            return {...state, recentWorkouts: [json]}
          }
          
        })      
        
      case 'GET_RECENT_SETS':
        console.log("get recent sets")

        return {...state, recentWorkouts: action.recentWorkouts}

   
      default:
        return state;
    }
}
