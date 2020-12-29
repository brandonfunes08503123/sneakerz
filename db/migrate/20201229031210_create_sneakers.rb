class CreateSneakers < ActiveRecord::Migration[5.2]
  def change
    create_table :sneakers do |t|
      t.string "brand", null: false
      t.string "name", null: false
      t.string "nickname", null: false
      t.text "description", null: false
      t.string "date", null: false
      t.string "sku", null: false
      t.integer "price", null: false
      t.integer "category_id", null: false
      t.integer "designer_id", null: false
      t.timestamps
    end

    add_index :sneakers, :brand
    add_index :sneakers, :designer_id
    add_index :sneakers, :name, unique: true
  end
end
