class Api::SearchesController < ApplicationController
    def index
           # ILIKE allows for approximation rather than exact searches
           # now we can do "AT" or "at" to find "At"
           @sneakers = Sneaker.where("name ILIKE ?", "%" + params[:query] + "%").limit(5)
           if @sneakers.empty?
            render json: ["No result found"]
           else
            render :results
           end
    end
end
