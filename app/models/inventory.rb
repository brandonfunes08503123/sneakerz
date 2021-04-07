class Inventory < ApplicationRecord
    validates :price, :size, :sneaker_id, presence: true

    belongs_to :sneaker,
        foreign_key: :sneaker_id,
        class_name: :Sneaker

    has_many :cart_products,
        foreign_key: :inventory_id,
        class_name: :Cart_Products
end
