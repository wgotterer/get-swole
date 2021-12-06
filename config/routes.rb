Rails.application.routes.draw do
  
  resources :users, only: [:create]
  # resources :private_classes
  # resources :reviews
  # resources :trainers
  # resources :online_classes
  resources :clients, only: [:create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
