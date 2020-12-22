@sneakers.each do |sneaker|
    json.set! sneaker.id do
        json.partial! 'sneaker', sneaker: sneaker
        json.photoUrls sneaker.photos.map { |file| url_for(file)}
    end
end