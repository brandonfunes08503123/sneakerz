class CartProduct < ApplicationRecord
    validates :user_id, :inventory_id, presence: true
    
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :inventory,
        foreign_key: :inventory_id,
        class_name: :Inventory
end