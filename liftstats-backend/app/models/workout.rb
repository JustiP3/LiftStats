class Workout < ApplicationRecord
    belongs_to :user

    def self.highest_weight(workout_type) 
        Workout.where("user_id = '1' and workout_type = '#{workout_type}'").order("weight DESC").limit(1)
    end 

    def self.my_workout_types(user_id=1)
       Workout.where("user_id = '#{user_id}'").order("workout_type").distinct.pluck(:workout_type)
    end 

    def self.most_reps(workout_type)
        Workout.where("user_id = '1' and workout_type = '#{workout_type}'").order("reps DESC").limit(1)
    end

    def self.most_weight_given_reps(workout_type, reps)
        Workout.where("user_id = '1' and workout_type = '#{workout_type}' and reps = '#{reps}'").order("weight DESC").limit(1)
    end 

    def self.all_sets(workout_type)
        Workout.where("user_id = '1' and workout_type = '#{workout_type}'")
    end 

    def self.personal_record(workout)
        most_weight = Workout.highest_weight(workout.workout_type)[0]
        most_reps = Workout.most_reps(workout.workout_type)[0] 
        most_weight_given_reps = Workout.most_weight_given_reps(workout.workout_type, workout.reps)[0]

        if !most_weight 
            most_weight = {weight: 0}
        end 
        if !most_reps       
            most_reps = {reps: 0}
        end 
        if !most_weight_given_reps
            most_weight_given_reps = {weight: 0}
        end 

        if workout.weight > most_weight[:weight]
            workout.personal_record = true
        elsif workout.reps > most_reps[:reps]
            workout.personal_record = true 
        elsif workout.weight > most_weight_given_reps[:weight]
            workout.personal_record = true 
        end      

        return workout 
    end 
end


