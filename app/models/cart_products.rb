class Cart < ApplicationRecord
    validates :user, :inventory, presence: true
    
    belongs_to :user
    belongs_to :inventory
end