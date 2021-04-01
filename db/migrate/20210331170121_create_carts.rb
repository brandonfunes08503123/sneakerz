class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer "user_id", null: false
      t.integer "sneaker_id"

      t.timestamps
    end

    add_index :carts, :user_id
    add_index :carts, :sneaker_id
  end
end
