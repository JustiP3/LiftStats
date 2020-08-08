Rails.application.routes.draw do
  resources :workouts, only: [:index, :show, :create]
  resources :users, only: [:show, :create]
end
