
LiftStats 

-------
Ideas for future improvement List:

-Need to add user accounts / user authentication

-Frontend - Dashboard- Log Workout Form: user_id is currently hard coded - needs to be currently logged in user 

-continue building cool stats functionality 
    -on graphs, add option to limit number of workouts displayed to a user defined number 
    -add a component that displays recent personal records (how will we get this from db? new custom route? add to ./records api call?)

-user defined groups (upper body, legs, arms, etc.) and add filter by group 

-created_at timestamp is not user friendly. add column to database for date of workout 

-make this a mobile app 



---------


------

CONTAINER: Welcome
Route: '/'

Landing page - wecome users, signup form, login form. 

TODO:
    -create account is not currently functonal 
    -user authentication 

---------------
CONTAINER: Dashboard 
route '/dashboard'

Display recent activity and log new workout form. 


Log Workout Form TODO:
-user_id is currently hard coded - needs to be currently logged in user *********



---------------
Rails API backend plan


user - email, pw_digest, display_name (maybe at OAuth authentication later)
workout - workout_type(name), weight, reps, date_code

user has_many workouts
workout belongs_to user

use activrecord scope methods 


-----------------------
CONTAINER: Stats_Dashboard 
route 'stats_dashboard'

Display interesting and helpful info about logged activities. 


--------------------