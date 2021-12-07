class AddPicToTrainer < ActiveRecord::Migration[6.1]
  def change
    add_column :trainers, :picture, :string
  end
end
