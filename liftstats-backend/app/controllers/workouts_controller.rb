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
    end 

    def highest_weight
    end 

    def highest_weight_given_reps
    end 

    def most_reps
    end 

end


