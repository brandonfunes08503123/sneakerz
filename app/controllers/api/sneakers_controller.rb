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

    def buy
       @sneaker = Sneaker.where("sku LIKE ?", "%" + params[:sku] + "%")
       byebug
    end
end