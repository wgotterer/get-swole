class OnlineClass < ApplicationRecord
  belongs_to :client
  belongs_to :trainer
  has_many :reviews
end
