import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
class PreCheckout extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(currentUser, inventoryId) {
    $.ajax({
      method: "POST",
      url: "api/cart_products",
      data: {
        user_id: currentUser,
        inventory_id: inventoryId,
      },
    });
  }

  render() {
    let {
      selectedSneaker,
      openProductPanel,
      sneaker,
      currentUser,
    } = this.props;

    console.log("this is selectedSneaker: ", selectedSneaker);

    return (
      <Fragment>
        <div className="pre-checkout-container">
          <Link to={`/sneaker/${sneaker.sku}`}>
            <button
              onClick={() => openProductPanel()}
              className="ProductSelect-closeOut btn-cancel"
            >
              Cancel
            </button>
          </Link>
          <div className="checkout-header">
            <h2>Lowest Price</h2>
            <h1>${selectedSneaker.price}</h1>
          </div>
          <div className="checkout-container">
            <div className="checkout-items">
              <span className="checkout-name">item</span>
              <span className="checkout-value">{sneaker.name}</span>
            </div>
            <div className="checkout-items">
              <span className="checkout-name">size</span>
              <span className="checkout-value">
                US M {selectedSneaker.size}
              </span>
            </div>
            <div className="checkout-items">
              <span className="checkout-name">condition</span>
              <span className="checkout-value">New</span>
            </div>
            <div className="checkout-items">
              <span className="checkout-name">Box</span>
              <span className="checkout-value">New</span>
            </div>
          </div>
        </div>
        <div className="checkout-btns-container">
          <Link to="/" className="checkout-link">
            <button
              className="checkout-add-cart-cont-btn"
              onClick={() => this.addToCart(currentUser, selectedSneaker.id)}
            >
              Add to cart and continue shopping
            </button>
          </Link>

          <button className="checkout-add-cart-btn">Checkout</button>
        </div>
      </Fragment>
    );
  }
}

export default PreCheckout;
