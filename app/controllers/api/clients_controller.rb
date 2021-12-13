class Api::ClientsController < ApplicationController

  def create
    client = Client.create!(client_params)
    render json: client, status: :created
  end
  
  def show
    client = Client.find(params[:id])
    render json: client, status: :ok
  end

  private
  
  def client_params
    params.permit(:email, :name, :birth, :goal)
  end
    
end
