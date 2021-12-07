class Client < ApplicationRecord
has_one :user
has_many :reviews
has_many :client_online_classes
has_many :online_classes, through: :client_online_classes
has_many :trainers, through: :online_classes
has_many :private_classes
has_many :trainers, through: :private_classes
validates :email,:name,:birth,:goal, presence: true
end
