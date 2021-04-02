import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
class PreCheckout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { selectedSneaker, openProductPanel, sneaker } = this.props;
    return (
      <Fragment>
        <div className="pre-checkout-container">
          <Link to={`/sneaker/${sneaker.sku}`}>
            <button
              onClick={() => openProductPanel()}
              className="ProductSelect-closeOut"
            >
              Cancel
            </button>
          </Link>
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
          <button className="btn-login">
            Add to Cart and Continue Shopping
          </button>
          <button className="btn-demo" onClick={() => this.demoUser()}>
            Checkout
          </button>
        </div>
      </Fragment>
    );
  }
}

export default PreCheckout;
