class RemoveTClientFromOnlineClasses < ActiveRecord::Migration[6.1]
  def change
    remove_column :online_classes, :client_id, :integer
  end
end
