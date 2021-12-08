class PrivateClassSerializer < ActiveModel::Serializer
  attributes :description, :date
  has_one :client
  has_one :trainer
end
