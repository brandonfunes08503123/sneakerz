json.set! @cart_products.id do
    json.extract! @cart_products, :id, :user_id, :inventory_id
    json.sneakerName @cart_products.inventory.sneaker.name
    json.sku @cart_products.inventory.sneaker.sku
    json.price @cart_products.inventory.price
    json.size @cart_products.inventory.size
    if @cart_products.inventory.sneaker.photo.attached? 
        json.photoUrl url_for(@cart_products.inventory.sneaker.photo)
    else
        json.photoUrl ""
    end 
end