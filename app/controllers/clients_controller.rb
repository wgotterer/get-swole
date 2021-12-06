class ClientsController < ApplicationController

    def create
        client = Client.create(client_params)
        if client.valid?
          render json: client, status: :created
        else
          render json: { errors: client.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    
    def client_params
      params.permit(:email, :name, :birth, :goal)
    end
    
end
