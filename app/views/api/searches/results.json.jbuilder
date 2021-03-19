json.array! @sneakers do |sneaker|
    json.extract! sneaker, :sku, :name
end