class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
 

    def create
        review = Review.create(review_params)
        if review.valid?
          render json: review, status: :created
        else
          render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

   def index
    reviews = Review.all
    render json: reviews
   end

    private
    
    def review_params
      params.permit(:content, :rating, :client_id, :online_class_id)
    end
    def render_not_found_response
        render json: { error: "Review not found" }, status: :not_found
    end
    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
