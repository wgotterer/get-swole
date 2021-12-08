class OnlineClassesController < ApplicationController
    # before_action :authorize
    # skip_before_action :authorize, only: [:index]

    def index
        online_classes = OnlineClass.all
        render json: online_classes, status: :ok
    end

    def show
        online_class = OnlineClass.find(params[:id])
        render json: online_class, status: :ok
    end

    def destroy
        online_class = OnlineClass.find(params[:id])
        online_class.destroy
        head :no_content
    end

    def create
        online_class = OnlineClass.create!(online_class_params)
        render json: online_class, status: :created
    end

    def update
        online_class = OnlineClass.find(params[:id])
        online_class.update!(online_class_params)
        render json: online_class, status: :ok
    end

    private

    def online_class_params
        params.permit(:video, :description, :category, :name, :trainer_id, :client_id)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
    
end
