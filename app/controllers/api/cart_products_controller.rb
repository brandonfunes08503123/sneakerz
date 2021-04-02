class Api::CartsController < ApplicationController

    # should have create, index, update, destroy
    def index
        @cart = current_user.cart

        render "api/carts/index"
    end


    # this add the sneaker to the cart
    def create
        @cart = Cart.new(cart_params)

        if @cart.save
            render "api/cart_products/show"
        else
            render json: @cart.errors.full_messages, status: 422
        end
    end
  

    def destroy
        @cart = Cart.find_by(id: params[:id])
        @cart.destroy
    end

    private

    def cart_params
        params.require(:cart).permit(:user_id, :inventory_id)
    end

end