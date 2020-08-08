class WorkoutsController < ApplicationController

    def show 
        workout = Workout.find_by(id: params["id"])
        render json: workout
    end 

    def create 
        workout = Workout.new
        workout.user_id = params["user_id"]
        workout.workout_type = params[set["workout_type"]]
        workout.weight = params[set["weight"]]
        workout.reps = params[set["reps"]]

            
        if workout.save 
            render json: workout      
        else 
            render json: workout.errors 
        end  
    end 

end


