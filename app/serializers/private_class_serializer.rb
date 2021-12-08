class PrivateClassSerializer < ActiveModel::Serializer

  attributes :description, :date, :trainer_id, :client_id
  has_one :client
  has_one :trainer
end
