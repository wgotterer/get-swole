class TrainersController < ApplicationController
  
    def index
        trainers = Trainer.all
        render json: trainers, status: :ok
    end

    def show
        trainer = Trainer.find(params[:id])
        render json: trainer, status: :ok
    end

end
