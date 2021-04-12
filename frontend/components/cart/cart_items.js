import React, { Fragment } from "react";
import { IoMdClose } from "react-icons/io";

const CartItems = (props) => {
  let { cartItems, removeItem } = props;

  // need to pass delete item in here
  return (
    <div className="cart-items-container">
      {Object.entries(cartItems).map(([itemKey, item]) => {
        console.log("this is the cartItem: ", item);
        return (
          <div className="cart-items" key={itemKey}>
            <div className="cart-img-wrapper">
              <img src={item.photoUrl} />
            </div>
            <div className="cart-product-wrapper">
              <span className="cart-product">{item.sneakerName}</span>
            </div>
            <div className="cart-product-price-wrapper">
              <span className="cart-price">${item.price}</span>
            </div>
            <div className="cart-product-size-wrapper">
              <span>Size: {item.size}</span>
            </div>
            <div className="cart-product-remove">
              <IoMdClose
                className="cart-remove-btn"
                size={18}
                onClick={() => removeItem(item.id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
