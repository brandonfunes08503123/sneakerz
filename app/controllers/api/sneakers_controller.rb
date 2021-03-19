class Api::SneakersController < ApplicationController

    def index
        @sneakers = Sneaker.all
        
        render :index
    end


    #
    def show
        @sneaker = Sneaker.find_by(sku: params[:id])
        # @inventory = Inventories.find_by(sneakers_id: {id: })
        render :show
    end
end