class WorkoutsController < ApplicationController

    def index 
        workouts = Workout.all 
        render json: workouts 
    end 

    def show 
        workout = Workout.find_by(id: params["id"])
        render json: workout
    end 

    def create 
        puts params 
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

end


