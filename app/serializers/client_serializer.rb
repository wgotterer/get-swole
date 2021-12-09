class ClientSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :birth, :goal

  has_many :private_classes
  has_many :trainers, through: :private_classes
  
end
