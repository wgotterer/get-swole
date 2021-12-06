class OnlineClassSerializer < ActiveModel::Serializer
  attributes :id, :video, :description, :category, :name
  has_one :client
  has_one :trainer
end
