class AddFieldsToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :online_class_id, :integer
  end
end
