class CreateInventories < ActiveRecord::Migration[5.2]
  def change
    create_table :inventories do |t|
      t.integer :sneaker_id, null: false
      t.integer :price, null: false 
      t.integer :size, null: false

      t.timestamps
    end
  end
end
