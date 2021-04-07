class Sneaker < ApplicationRecord
    has_one_attached :photo
    has_many :inventory

    has_many :cart
        
end
