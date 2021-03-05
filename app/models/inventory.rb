class Inventory < ApplicationRecord
    validates :price, :size, :sneaker_id, presence: true

    belongs_to :sneaker,
        foreign_key: :sneaker_id,
        class_name: :Sneaker
end
