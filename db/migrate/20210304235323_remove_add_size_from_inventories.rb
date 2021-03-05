class RemoveAddSizeFromInventories < ActiveRecord::Migration[5.2]
  def change
    remove_column :inventories, :size, :integer
    add_column :inventories, :size, :decimal
  end
end
