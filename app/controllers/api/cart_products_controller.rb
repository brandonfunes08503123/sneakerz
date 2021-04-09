class Api::CartProductsController < ApplicationController

    # should have create, index, update, destroy
    def index
        @cart_products = current_user.cart_products
        # @cart_products = Cart.where(user_id: @current_user)

        render "api/cart_products/index"
    end


    # this adds the sneaker to the cart
    def create
        @cart_product = CartProduct.new(cart_product_params)

        if @cart_product.save
            render "api/cart_products/show"
        else
            render json: @cart_product.errors.full_messages, status: 422
        end
    end
  

    def destroy
        @cart_product = CartProduct.find_by(id: params[:id])
        @cart_product.destroy
    end

    private

    def cart_product_params
        params.require(:cart_product).permit(:user_id, :inventory_id)
    end

end