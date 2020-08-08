class WorkoutsController < ApplicationController

    def index 
        workouts = Workout.where("user_id = '1'").order("created_at DESC").limit(5)
        render json: workouts 
    end 

    def show 
        workout = Workout.find_by(id: params["id"])
        render json: workout
    end 

    def create 
        workout = Workout.new
        workout.user_id = params["user_id"]
        workout.workout_type = params["workout"]["workoutType"]
        workout.weight = params["workout"]["weight"]
        workout.reps = params["workout"]["reps"]

            
        if workout.save 
            render json: workout      
        else 
            render json: workout.errors 
        end  
    end 

    def types
        render json: {workout_types: Workout.my_workout_types(1)}
    end 

    def records
        most_weight = {set_id: 123, weight: 123, reps: 123, ....}
        most_reps = {set_id: 123, weight: 123, reps: 123, ....}
        most_weight_given_reps = {set_id: 123, weight: 123, reps: 123, ....}

        render json: (most_weight: {}, most_reps: {}, most_weight_given_reps:{})
    end 

end


