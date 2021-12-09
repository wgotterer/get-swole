class PrivateClassesController < ApplicationController

  def create
    private_class= PrivateClass.create!(private_class_params)
    render json: private_class, status: :created
  end

  def destroy
    private_class = PrivateClass.find(params[:id])
    private_class.destroy
    head :no_content
  end

  def index
    private_classes = PrivateClass.all
    render json: private_classes, status: :ok
  end
  
  def show
    private_class = PrivateClass.find(params[:id])
    render json: private_class
  end
    
  
  private

  def private_class_params
    params.permit(:description, :date, :client_id, :trainer_id)
  end

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

end
