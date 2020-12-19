class ReorderColumns < ActiveRecord::Migration[5.2]
  def change
      change_column :shoes, :price, :integer, null: false
      change_column :shoes, :designer_id, :string, null: false
      change_column :shoes, :category_id, :string, null: false
      change_column :shoes, :created_at, :datetime, null: false
      change_column :shoes, :updated_at, :datetime, null: false
  end
end
