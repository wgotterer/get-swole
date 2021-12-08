class RemoveColumnFromPrivateClasses < ActiveRecord::Migration[6.1]
  def change
    remove_column :private_classes, :client_name, :string
  end
end
