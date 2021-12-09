class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :online_class_id, :client_id
  belongs_to :client
  
end
