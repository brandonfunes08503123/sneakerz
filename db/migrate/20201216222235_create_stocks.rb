class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.integer :sneakers_id, null: false
      t.integer :quantity, null: false
      t.timestamps
    end

    add_index :stocks, :quantity
  end
end
