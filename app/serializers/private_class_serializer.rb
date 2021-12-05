class PrivateClassSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :date
  has_one :client
  has_one :trainer
end
