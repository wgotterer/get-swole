class AddColumnToPrivateClass < ActiveRecord::Migration[6.1]
  def change
    add_column :private_classes, :date, :datetime
  end
end
