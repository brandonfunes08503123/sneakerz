@sneakers.each do |sneaker|
    json.set! sneaker.id do
        json.partial! 'sneaker', sneaker: sneaker
        #json.photoUrls sneaker.photos.map { |file| url_for(file)}
        if sneaker.photos.attached?
            json.photoUrl url_for(sneaker.photos)
        else
            json.photoUrl ""
        end
    end
end