class TrainerSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :picture
  has_many :private_classes
  
end
