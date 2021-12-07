class RemoveStuffFromOnlineClasses < ActiveRecord::Migration[6.1]
  def change
    remove_column :online_classes, :client_id, :bigint
  end
end
