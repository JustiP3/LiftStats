Rails.application.routes.draw do
  
  resources :users, only: [:show, :create] do 
    resources :workouts, only: [:index, :show, :create]
  end 

 
end
