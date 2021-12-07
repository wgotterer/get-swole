class ClientOnlineClassSerializer < ActiveModel::Serializer
  attributes :id
  has_one :client
  has_one :online_class
end
