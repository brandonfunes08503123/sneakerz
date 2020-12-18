class EditBrandColumn < ActiveRecord::Migration[5.2]
  def change
    remove_index :sneakers, :brand
    add_index :sneakers, :brand
  end
end
