class OnlineClassSerializer < ActiveModel::Serializer
  attributes :id, :video, :description
  has_one :client
  has_one :trainer
end
