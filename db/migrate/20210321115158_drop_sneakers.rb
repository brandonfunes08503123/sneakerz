class DropSneakers < ActiveRecord::Migration[5.2]
  def change
    drop_table :sneakers
  end
end
