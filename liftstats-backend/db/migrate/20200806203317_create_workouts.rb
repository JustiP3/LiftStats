class CreateWorkouts < ActiveRecord::Migration[6.0]
  def change
    create_table :workouts do |t|
      t.integer :user_id
      t.string :workout_type
      t.integer :weight
      t.integer :reps
      t.timestamps
    end
  end
end
