class EditDesignerCol < ActiveRecord::Migration[5.2]
  def change
    remove_index :sneakers, :designer_id
    add_index :sneakers, :designer_id
  end
end
