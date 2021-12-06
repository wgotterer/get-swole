class AddThingsToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :client_id, :integer
  end
end
