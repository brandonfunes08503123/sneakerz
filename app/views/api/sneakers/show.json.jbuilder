json.partial! 'api/sneakers/sneaker', sneaker: @sneaker

json.photoUrls @sneaker.photos.map { |file| url_for(file)}


#if @sneaker.photos.attached?
#    json.photoUrl url_for(@sneaker.photos)
#else
#    json.photoUrl ""
#end

json.inventory @inventory
