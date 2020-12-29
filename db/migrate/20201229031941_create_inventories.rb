class CreateInventories < ActiveRecord::Migration[5.2]
  def change
    create_table :inventories do |t|
      t.integer :sneaker_id, null: false
      t.integer :quantity, null: false
      t.timestamps
    end
    add_index :inventories, :quantity
  end
end
