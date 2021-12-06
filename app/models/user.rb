class User < ApplicationRecord
    has_secure_password
    has_one :client
    has_one :trainer
end
