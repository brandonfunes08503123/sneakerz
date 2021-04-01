class EditCart < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :sneaker_id, :integer
    add_column :carts, :inventory_id, :integer 
    add_index :carts, :inventory_id
  end
end
