class Review < ApplicationRecord
    belongs_to :online_class
    belongs_to :client
end
