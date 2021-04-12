class Api::CartProductsController < ApplicationController

    def index
        @cart_products = current_user.cart_products

        render "api/cart_products/index"
    end


    def create
        @cart_product = CartProduct.new(cart_product_params)

        # if @cart_product.save
        #     render "api/cart_products/show"
        # else
        #     render json: @cart_product.errors.full_messages, status: 422
        # end

        if !@cart_product.save
            render json: @cart_product.errors.full_messages, status: 422
        end
    end
  

    def destroy
        @cart_product = CartProduct.find_by(id: params[:id])
        @cart_product.destroy
    end

    private

    def cart_product_params
        # params.require(:cart_product).permit(:user_id, :inventory_id)
        params.permit(:user_id, :inventory_id)
    end

end