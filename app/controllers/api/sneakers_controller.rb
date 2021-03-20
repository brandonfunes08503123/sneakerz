class Api::SneakersController < ApplicationController

    def index
        @sneakers = Sneaker.all       
        render :index
    end


    #
    def show
        @sneaker = Sneaker.find_by(sku: params[:id])
        @inventory = Inventory.where(sneaker_id: @sneaker.id)
        render :show
    end
end