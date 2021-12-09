class AddColumToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :client_name, :string
  end
end
