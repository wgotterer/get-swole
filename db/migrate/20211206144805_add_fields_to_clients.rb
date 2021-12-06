class AddFieldsToClients < ActiveRecord::Migration[6.1]
  def change
    add_column :clients, :name, :string
    add_column :clients, :birth, :date
    add_column :clients, :goal, :string
  end
end
