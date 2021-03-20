Inventory.destroy_all

sneakers = Sneaker.all
sizes = [4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12]
selectedSizes = []
# prices = []

# (4..12).step(0.5) do |n|
#     #sizes need to be unique
    
#     sizes << n
# end


# (4..12).step(0.5) do |n|
#     if(!sizes.include?(n))
#         sizes << n
#     end
# end

def priceGenerator (sneakerSize)
    if(sneakerSize < 8)
        return rand(150..400)
    else
        return rand(220..650)
    end
end

sneakers.each do |sneaker|
    randAmount = rand(6..12)
    selectedSizes = sizes.sample(randAmount).sort();
    selectedSizes.each do |size|
        Inventory.create!(
                sneaker_id: sneaker.id,
                size: size, 
                price: priceGenerator(size)
            )
    end
end