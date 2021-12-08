class AddColumnToPrivateClasses < ActiveRecord::Migration[6.1]
  def change
    add_column :private_classes, :client_name, :string
  end
end
