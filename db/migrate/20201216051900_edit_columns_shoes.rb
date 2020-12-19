class EditColumnsShoes < ActiveRecord::Migration[5.2]
  def change
    change_column :shoes, :release_date, :string, null: false
    change_column :shoes, :designer_id, :integer, null: false
    change_column :shoes, :category_id, :integer, null: false
  end
end
