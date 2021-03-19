class Api::SearchesController < ApplicationController
    def index
           @sneakers = Sneaker.where("name LIKE ?", "%" + params[:query] + "%").limit(5)
           if @sneakers.empty?
            render json: ["No result found"]
           else
            render :results
           end
    end
end
