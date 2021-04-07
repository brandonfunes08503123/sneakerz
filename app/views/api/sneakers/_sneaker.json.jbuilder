json.extract! sneaker, :brand, :name, :nickname, :description, :date, :sku, :upper_material, :main_color, :colorway, :technology, :silhouette, :designer, :category
 if sneaker.photo.attached? 
        json.photoUrl url_for(sneaker.photo)
 else
        json.photoUrl ""
 end