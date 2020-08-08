export default function manageWorkouts(state = {userId: "", workout: {workout_type:"", weight: 0, reps: 0} }, action) {
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

   
      default:
        return state;
    }
}
