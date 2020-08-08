
export const logSet = (workout={}) => { 
    return {
        type: 'LOG_SET', workout: workout 
    } };


export const fetchRecentSets = () => {

    return fetch('http://localhost:3000/workouts').then((response) => {
          return response.json();
        }).then((json) => {

          console.log(json) // I see this in console problem is below 
          return { type: 'GET_RECENT_SETS', recentWorkouts: json }  
          
        })      
    
}

