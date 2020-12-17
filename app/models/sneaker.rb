class Sneaker < ApplicationRecord
    has_many_attached :photos
    belongs_to :designer
end
