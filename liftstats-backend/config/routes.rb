Rails.application.routes.draw do

  get '/users/:id/workouts/types', to: 'workouts#types'
  get '/users/:id/workouts/:type/highest_weight', to: 'workouts#highest_weight'
  get '/users/:id/workouts/:type/:reps', to: 'workouts#highest_weight_given_reps'
  get 'users/:id/workouts/:type/most_reps', to: 'workouts#most_reps'

  
  resources :users, only: [:show, :create] do 
    resources :workouts, only: [:index, :show, :create]
  end 


 
end

