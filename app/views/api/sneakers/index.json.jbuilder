# json.set! @sneakers do |sneaker|
#     json.extract! sneaker, :brand, :name, :description, :date, :sku, :price, :designer_id, :category_id
    
   

  
# end


# json.set! sneaker.photos do |photo|
#     if sneaker.photo.attached?
#         json.photoUrl url_for(sneaker.photo)
#     else
#         json.photoUrl ""
#     end
# end
@sneakers.each do |sneaker|
    json.set! sneaker.id do
        json.partial! 'sneaker', sneaker: sneaker
        json.photoUrls sneaker.photos.map { |file| url_for(file)}
    end
end