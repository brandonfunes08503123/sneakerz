class Sneaker < ApplicationRecord
    has_one_attached :photo
    has_many :inventory
    belongs_to :designer
end
