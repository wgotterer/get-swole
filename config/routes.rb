Rails.application.routes.draw do
  
  # resources :client_online_classes
  resources :users, only: [:create]
  resources :private_classes, only: [:create, :destroy, :index]
  resources :reviews, only: [:index, :create, :destroy]
  resources :trainers, only: [:index, :show]
  resources :online_classes, only: [:create, :destroy, :index, :show]
  resources :clients, only: [:create, :show]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
