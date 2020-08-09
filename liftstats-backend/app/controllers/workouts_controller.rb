class WorkoutsController < ApplicationController

    def index 
        #used for recent sets feed 
        workouts = Workout.where("user_id = '1'").order("created_at DESC").limit(5)
        render json: workouts 
    end 

    def show 
        #not currently used ?
        workout = Workout.find_by(id: params["id"])
        render json: workout
    end 

    def create 
        workout = Workout.new
        workout.user_id = params["user_id"]
        workout.workout_type = params["workout"]["workoutType"]
        workout.weight = params["workout"]["weight"]
        workout.reps = params["workout"]["reps"]

        #most_weight = Workout.highest_weight(workout.workout_type)[0]
        #most_reps = Workout.most_reps(workout.workout_type)[0]
        #most_weight_given_reps = Workout.most_weight_given_reps(workout.workout_type, workout.reps)[0]

        #if ((workout.weight > most_weight) || (workout.reps > most_reps) || (workout.weight > most_weight_given_reps)) 
            
        #end 
        workout.personal_record = true     
        render json: workout
        #if workout.save 

         #   render json: workout      
        #else 
       #     render json: workout.errors 
       # end  
    end 

    def types
        # used to generate stats cards each with a unique workout_type
        render json: {workout_types: Workout.my_workout_types(1)}
    end 

    def records
        type = params["type"]
        user = params["id"]

        most_weight = Workout.highest_weight(type)[0]
        most_reps = Workout.most_reps(type)[0]
        render json: {most_weight: most_weight, most_reps: most_reps}

        #most_weight = {set_id: 123, weight: 123, reps: 123, ....}
        #most_reps = {set_id: 123, weight: 123, reps: 123, ....}
        #most_weight_given_reps = {set_id: 123, weight: 123, reps: 123, ....}

        #render json: (most_weight: {}, most_reps: {}, most_weight_given_reps:{})
    end 

end


