class AddNameToOnlineClasses < ActiveRecord::Migration[6.1]
  def change
    add_column :online_classes, :name, :string
  end
end
