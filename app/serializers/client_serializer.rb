class ClientSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :birth, :goal
end
