class EditShoes < ActiveRecord::Migration[5.2]
  def change
    remove_column :shoes, :designer_id
    remove_column :shoes, :category_id
    remove_column :shoes, :date
    add_column :shoes, :release_date, :string
    add_column :shoes, :designer_id, :integer
    add_column :shoes, :category_id, :integer
  end
end
