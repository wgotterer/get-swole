class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :picture
  
  has_many :online_classes
  has_many :private_classes
  has_many :online_classes
  
end
