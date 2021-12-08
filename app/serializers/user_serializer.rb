class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :client_id, :trainer_id

end
