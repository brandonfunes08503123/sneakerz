class CreateDesigners < ActiveRecord::Migration[5.2]
  def change
    create_table :designers do |t|
      t.string :name, null: false
      t.timestamps
    end
    
    add_index :designers, :name, unique: true
  end
end
