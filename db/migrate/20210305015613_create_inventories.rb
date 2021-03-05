class CreateInventories < ActiveRecord::Migration[5.2]
  def change
    create_table :inventories do |t|
      t.integer :sneaker_id, null: false
      t.float :size, null: false, :precision => 2, :scale => 1
      t.integer :price, null: false

      t.timestamps
    end
  end
end
