Rails.application.routes.draw do

  get '/users/:id/workouts/types', to: 'workouts#types'
  get '/users/:id/workouts/:type/records', to: 'workouts#records'

  
  resources :users, only: [:show, :create] do 
    resources :workouts, only: [:index, :show, :create]
  end 


 
end

