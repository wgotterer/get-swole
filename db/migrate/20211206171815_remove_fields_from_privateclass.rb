class RemoveFieldsFromPrivateclass < ActiveRecord::Migration[6.1]
  def change
    remove_column :private_classes, :name, :string
  end
end
