class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :text, :rating
end
