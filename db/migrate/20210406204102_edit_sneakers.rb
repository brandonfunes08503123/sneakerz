class EditSneakers < ActiveRecord::Migration[5.2]
  def change
    remove_column :sneakers, :designer_id, :integer
    remove_column :sneakers, :category_id, :integer
    add_column :sneakers, :designer, :string
    add_column :sneakers, :category, :string
  end
end
