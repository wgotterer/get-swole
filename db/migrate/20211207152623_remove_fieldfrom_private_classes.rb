class RemoveFieldfromPrivateClasses < ActiveRecord::Migration[6.1]
  def change
     remove_column :private_classes, :date, :integer
  end
end
