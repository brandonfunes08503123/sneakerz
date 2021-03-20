class Sneaker < ApplicationRecord
    has_many_attached :photos
    has_many :inventory
    belongs_to :designer
end
