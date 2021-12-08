class ClientSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :birth, :goal
  has_many :private_classes
end
