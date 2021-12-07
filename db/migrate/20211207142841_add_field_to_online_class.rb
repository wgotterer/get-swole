class AddFieldToOnlineClass < ActiveRecord::Migration[6.1]
  def change
    add_column :online_classes, :client_id, :integer
  end
end
