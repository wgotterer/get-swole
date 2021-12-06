class RemoveUsernameFromClients < ActiveRecord::Migration[6.1]
  def change
    remove_column :clients, :username, :string
    remove_column :clients, :password_digest, :string
  end
end
