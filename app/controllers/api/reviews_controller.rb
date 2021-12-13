class Api::ReviewsController < ApplicationController
  before_action :authorize

  def create
    review = Review.create!(review_params)
    render json: review, status: :created
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end

  def index
    reviews = Review.all
    render json: reviews, status: :ok
  end

  private
  
  def review_params
    params.permit(:content, :rating, :client_id, :online_class_id, :client_name)
  end

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

end
