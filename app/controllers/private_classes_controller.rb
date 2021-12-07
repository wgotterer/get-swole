class PrivateClassesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action :authorize

    def create
        private_class= PrivateClass.create(private_class_params)
        if private_class.valid?
          render json: private_class, status: :created
        else
          render json: { errors: private_class.errors.full_messages }, status: :unprocessable_entity
        end
    end
    def destroy
        private_class = PrivateClass.find(params[:id])
        private_class.destroy
        head :no_content
    end
    def index
        private_classes = PrivateClass.all
        render json: private_classes
    end
    
    private
    def private_class_params
        params.permit(:description, :date, :client_id, :trainer_id)
    end
    def render_not_found_response
        render json: { error: "Private class not found" }, status: :not_found
    end
    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
