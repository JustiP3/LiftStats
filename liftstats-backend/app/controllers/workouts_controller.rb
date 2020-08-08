class WorkoutsController < ApplicationController

    def show 
        workout = Workout.find_by(id: params["id"])
        render json: workout
    end 

    def create
    end 

end
