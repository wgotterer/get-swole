class CreateOnlineClasses < ActiveRecord::Migration[6.1]
  def change
    create_table :online_classes do |t|
      t.string :video
      t.string :description
      t.belongs_to :client, null: false, foreign_key: true
      t.belongs_to :trainer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
