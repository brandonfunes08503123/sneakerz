class AddSizeToInventories < ActiveRecord::Migration[5.2]
  def change
    add_column :inventories, :size, :integer
  end
end
