class PrivateClassSerializer < ActiveModel::Serializer
  attributes :id, :description, :date
  has_one :client
  has_one :trainer
end
