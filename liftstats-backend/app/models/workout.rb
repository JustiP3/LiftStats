class Workout < ApplicationRecord
    belongs_to :user

    def self.highest_weight(workout_type) 
        Workout.where("workout_type = '#{workout_type}'").order("weight DESC")
    end 
end
