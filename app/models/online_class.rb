class OnlineClass < ApplicationRecord
  has_many :client_online_classes
  has_many :clients, through: :client_online_classes
  belongs_to :trainer
  has_many :reviews
  
end
