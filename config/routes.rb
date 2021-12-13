Rails.application.routes.draw do

  namespace :api do
    resources :users, only: [:create]
    resources :private_classes, only: [:create, :destroy, :index, :show]
    resources :reviews, only: [:index, :create, :destroy]
    resources :trainers, only: [:index, :show]
    resources :online_classes, only: [:create, :destroy, :index, :show, :update]
    resources :clients, only: [:create, :show]
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    get "/me", to: "users#show"
    # Routing logic: fallback requests for React Router.
    # Leave this here to help deploy your app later!
    get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  end
  
end

# ADD /api/users when we namespace for deployment. change fetch requests

# htttp://localhost:4000/api/users