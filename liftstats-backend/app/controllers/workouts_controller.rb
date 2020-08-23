class WorkoutsController < ApplicationController

    def index 
        user_id = params["user_id"]
        workouts = Workout.where("user_id = #{user_id}").order("created_at DESC").limit(5)
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

       workout = Workout.personal_record(workout)
       
        if workout.save 
            render json: workout      
        else 
            render json: workout.errors 
        end  
    end 

    def types 
        user_id = params["id"]
        render json: {workout_types: Workout.my_workout_types(user_id)}
    end 

    def records
        type = params["type"]
        user = params["id"]
        reps = params["reps"]
      

        most_weight = Workout.highest_weight(type)[0]
        most_reps = Workout.most_reps(type)[0]
        all_sets = Workout.all_sets(type)

        if !!reps
            most_weight_given_reps = Workout.most_weight_given_reps(type, reps)
            render json: {most_weight_given_reps: most_weight_given_reps}
        else 
            render json: {most_weight: most_weight, most_reps: most_reps, all_sets: all_sets}
        end         

        
    end 

end


