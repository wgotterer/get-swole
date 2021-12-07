class OnlineClassesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action :authorize

    def index
        online_classes = OnlineClass.all
        render json: online_classes
    end
    def show
        online_class = OnlineClass.find(params[:id])
        render json: online_class
    end
    def destroy
        online_class = OnlineClass.find(params[:id])
        online_class.destroy
        head :no_content
    end
    def create
        online_class = OnlineClass.create(online_class_params)
        if online_class.valid?
            render json: online_class, status: :created
          else
            render json: { errors: online_class.errors.full_messages }, status: :unprocessable_entity
          end
    end
    private    
    def online_class_params
        params.permit(:video, :description, :category, :name, :trainer_id, :client_id)
    end
    def render_not_found_response
        render json: { error: "Class not found" }, status: :not_found
    end
    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
