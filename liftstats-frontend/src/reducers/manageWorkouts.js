export default function manageWorkouts(state = {userId: "", recentWorkouts: [{workout_type:"", weight: 0, reps: 0} ]}, action) {
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
        
        return fetch('http://localhost:3000/workouts', configObj).then((response) => {
          return response.json();
        }).then((json) => {
          console.log(json)
          return json 
        })      
        
      case 'GET_RECENT_SETS':
        console.log("get recent sets")
        return state 

   
      default:
        return state;
    }
}
