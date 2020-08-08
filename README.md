
LiftStats 


TODO List:

-Frontend - Dashboard- Log Workout Form: user_id is currently hard coded - needs to be currently logged in user *********
-Frontend - in ManageWorkouts - "GET_RECENT_STATS" is hard coded. need to respond to fetch request.



------

CONTAINER: Welcome
Route: '/'

-Displays login and logout button     - DONE 

-Clicking either button will display a form   - DONE 
  -form will be for login or signup and will include a cancel or x button that will return to displaying both buttons 
  -both of these forms are components with state

TODO:
    -Build each form 
    -create event handlers for submit
    -user will have a unique token assigned on login (stored in the store )

---------------
CONTAINER: Dashboard 
route '/dashboard'

PR1 = Highest Weight for a given number of reps
PR2 = Highest weight Regardless of reps
PR3 = Highest number of reps regardelss of weight 

-view stats dashboard button - link to another container new route 
-log workout button 

potential ideas for components:
    -most recent PRs (Personal Records ) (stateless component, just displays props)
    -recent sets logged feed (stateless component)


Log Workout Form TODO:
-user_id is currently hard coded - needs to be currently logged in user *********



---------------
Rails API backend plan


user - email, pw_digest, display_name (maybe at OAuth authentication later)
workout - workout_type(name), weight, reps, date_code

user has_many workouts
workout belongs_to user

there will be a lot of activerecord work. 
I want to make sure the app is fast and I remember that activerecord can query a database very fast


-----------------------
CONTAINER: Stats_Dashboard 
route 'stats_dashboard'

ideas for components:

    -select a workout_type from a dropdown - display all 3 PRs for that workout_type 
    -list of recents sets that broke a pr
    -select a workout_type, time_period, number_of_reps - display a graph x: time_period, y: weight for that given number of reps 
    -display a feed of all 3 prs for all workout_types 



--------------------