class AddFieldsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :client_id, :integer
    add_column :users, :trainer_id, :integer
  end
end
