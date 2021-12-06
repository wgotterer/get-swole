class Trainer < ApplicationRecord
    has_one :user
    has_many :online_classes
    has_many :clients, through: :online_classes
    has_many :private_classes
    has_many :clients, through: :private_classes
end
