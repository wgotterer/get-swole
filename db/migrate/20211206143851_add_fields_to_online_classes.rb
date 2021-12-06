class AddFieldsToOnlineClasses < ActiveRecord::Migration[6.1]
  def change
    add_column :online_classes, :category, :string
  end
end
