class OnlineClassSerializer < ActiveModel::Serializer
  attributes :id, :video, :description, :category, :name

  # has_many :clients
  has_one :trainer
  has_many :reviews
  
end
