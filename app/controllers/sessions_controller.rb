class SessionsController < ApplicationController

    def create
        client = Client.find_by(username: params[:username])
        if client&.authenticate(params[:password])
          session[:user_id] = client.id
          render json: client, status: :created
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
      end
end
