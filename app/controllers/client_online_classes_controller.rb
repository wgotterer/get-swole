class ClientOnlineClassesController < ApplicationController
    before_action :authorize

    private

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
    
end
