class User < ApplicationRecord
    has_secure_password
    has_one :client
    has_one :trainer
    
    validates :username, uniqueness: true, presence: true
    validates :password, presence: true
   
end
