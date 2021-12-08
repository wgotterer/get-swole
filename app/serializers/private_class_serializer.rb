class PrivateClassSerializer < ActiveModel::Serializer
  attributes :description, :date, :client_name
  has_one :client
  has_one :trainer
end
