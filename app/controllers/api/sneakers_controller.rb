class Api::SneakersController < ApplicationController

    def index
        @sneakers = Sneaker.all       
        render :index
    end


    #
    def show
        @sneaker = Sneaker.find_by(sku: params[:id])
        @inventory = Inventory.where(sneaker_id: @sneaker.id)
        render :show, include: [:also_viewed]
    end

    def also_viewed
        @sneakers = Sneaker.limit(8).order("RANDOM()").where.not(id: params[:id])

        render :also_viewed
    end

    # rendering :also_viewed for the collections
    # bc all I want is the sneaker, sku, and image.
    # :also_viewed provides all of that. Next step is to create a partial
    # but for now, just rendering the same view

    def adidas_full_collection
        @sneakers = Sneaker.all.where("brand = ? AND designer != ?", "Adidas", "Kanye West")

        render :also_viewed
    end
    
    def yeezy_full_collection
        @sneakers = Sneaker.all.where(designer: "Kanye West")
        
        render :also_viewed
    end

    def sbs_full_collection
        @sneakers = Sneaker.all.where(silhouette: "Dunk SB")
    
        render :also_viewed
    end

    def jordan_full_collection
        @sneakers = Sneaker.all.where(brand: "Air Jordan")
    
        render :also_viewed
    end

    def adidas_front_page_collection
        @sneakers = Sneaker.limit(8).order("RANDOM()").where("brand = ? AND designer != ?", "Adidas", "Kanye West")
    
        render :also_viewed
    end

    def yeezy_front_page_collection
        @sneakers = Sneaker.limit(8).order("RANDOM()").where(designer: "Kanye West")
    
        render :also_viewed
    end
    
    def sbs_front_page_collection
        @sneakers = Sneaker.limit(8).order("RANDOM()").where(silhouette: "Dunk SB")
    
        render :also_viewed
    end

    def jordan_front_page_collection
        @sneakers = Sneaker.limit(8).order("RANDOM()").where(brand: "Air Jordan")
    
        render :also_viewed
    end
end