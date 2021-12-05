class CreatePrivateClasses < ActiveRecord::Migration[6.1]
  def change
    create_table :private_classes do |t|
      t.string :name
      t.string :description
      t.integer :date
      t.belongs_to :client, null: false, foreign_key: true
      t.belongs_to :trainer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
