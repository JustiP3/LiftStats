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

    def self.most_weight_given_reps(workout_type, reps, requested_number_of_records=1)
        Workout.where("user_id = '1' and workout_type = '#{workout_type}' and reps = '#{reps}'").order("weight DESC").limit(requested_number_of_records)
    end 
end


