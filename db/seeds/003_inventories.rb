Inventory.destroy_all


sneakers = Sneakers.all
sizes = []


(4..12).step(0.5) do |n|
    sizes << n
end




sneakers.each do |sneaker|
    Inventory.create(
        id: sneaker.id,
        sizes: sizes,
        price: prices
    )
end