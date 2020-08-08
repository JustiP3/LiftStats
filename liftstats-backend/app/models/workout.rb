class Workout < ApplicationRecord
    belongs_to :user

    def self.highest_weight(workout_type) 
        Workout.where("user_id = '1'").where("workout_type = '#{workout_type}'").order("weight DESC").limit(1)
    end 

    def self.my_workout_types(user_id=1)
       Workout.where("user_id = '#{user_id}'").distinct.pluck(:workout_type)
    end 
end


