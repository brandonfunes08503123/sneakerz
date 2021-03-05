Inventory.destroy_all

sneakers = Sneaker.all
sizes = []
# prices = []

# (4..12).step(0.5) do |n|
#     #sizes need to be unique
    
#     sizes << n
# end


(4..12).step(0.5) do |n|
    if(!sizes.include?(n))
        sizes << n
    end
end

    

puts "sizes: #{sizes}"

def priceGenerator (sneakerSize)
    if(sneakerSize < 8)
        return rand(150..400)
    else
        return rand(220..650)
    end
end

sneakers.each do |sneaker|
    sizes.each do |size|
        Inventory.create!(
                sneaker_id: sneaker.id,
                size: size, 
                price: priceGenerator(size)
            )
    end
end