class AddPersonalRecordToWorkouts < ActiveRecord::Migration[6.0]
  def change
    add_column :workouts, :personal_record, :boolean
  end
end
