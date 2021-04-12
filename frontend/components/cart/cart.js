import React, { Component } from "react";
import CartItems from "./cart_items";
import { RiVisaLine } from "react-icons/ri";
import { Redirect } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   subTotal: 0,
    // };

    this.emptyCart = this.emptyCart.bind(this);
    this.oneItem = this.oneItem.bind(this);
    this.multipleItems = this.multipleItems.bind(this);
    this.calcSubTotal = this.calcSubTotal.bind(this);
    this.grandTotal = this.grandTotal.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser !== null) {
      this.props.getUserCart();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cart.length === this.props.cart.length) {
      this.emptyCart();
    }
  }

  emptyCart() {
    return (
      <div className="HeroPane-shoe-wrapper">
        <span>Cart is empty</span>
      </div>
    );
  }

  oneItem() {
    return (
      <div className="HeroPane-shoe-wrapper">
        <div className="ProductPane-shoe-wrapper">
          This is a picture for now
        </div>
      </div>
    );
  }

  multipleItems() {
    return (
      <div className="HeroPane-cart-wrapper">
        <CartItems
          cartItems={this.props.cart}
          removeItem={this.props.removeItem}
        />
      </div>
    );
  }

  calcSubTotal() {
    let { cart } = this.props;

    let subTotal = Object.values(cart).reduce(
      (subTotal, { price }) => subTotal + price,
      0
    );

    return <span className="checkout-value">${subTotal}</span>;
  }

  grandTotal() {
    let { cart } = this.props;

    let subTotal = Object.values(cart).reduce(
      (subTotal, { price }) => subTotal + price,
      0
    );

    let grandTotal = subTotal + subTotal * 0.12;
    return <div className="checkout-value">${grandTotal}</div>;
  }

  render() {
    let { cart } = this.props;
    return (
      <div className="ProductContainer">
        {cart.length < 1 ? (
          this.emptyCart()
        ) : (
          <div className="HeroContainer">
            <div className="HeroPane-left-wrapper">
              <div className="cart-right-header-container">
                <h1 className="cart-right-header">Shopping Cart</h1>
              </div>
              {cart.length === 1 ? this.oneItem() : this.multipleItems()}
            </div>
            <div className="ProductPane-container">
              <div className="HeroPane-right">
                <div className="cart-right-container">
                  <div className="cart-right-header-container">
                    <h1 className="cart-right-header">Order Details</h1>
                  </div>
                  <div className="cart-container">
                    <div className="checkout-items">
                      <span className="checkout-name">Ship To</span>
                      <span className="checkout-value">
                        1234 Tester St., San Francisco, CA
                      </span>
                    </div>
                    <div className="checkout-items">
                      <span className="checkout-name">Payment</span>
                      <div className="checkout-credit-card">
                        <RiVisaLine size={27} />
                        <div className="credit-card-value">Ending in 8237</div>
                      </div>
                    </div>
                    <div className="checkout-items">
                      <span className="checkout-name">SubTotal</span>
                      {this.calcSubTotal()}
                    </div>
                    <div className="checkout-items">
                      <span className="checkout-name">Tax</span>
                      <span className="checkout-value">0.12%</span>
                    </div>
                    <div className="checkout-items">
                      <span className="checkout-name">Grand Total</span>
                      <span className="checkout-value">
                        {this.grandTotal()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkout-btns-container">
                <a
                  href="https://www.linkedin.com/in/cameron-tanjoco-8ba612a3/"
                  className="checkout-link"
                >
                  <button className="checkout-add-cart-cont-btn">
                    LinkedIn
                  </button>
                </a>
                <a
                  href="https://github.com/HiThereImCam"
                  className="checkout-link-right"
                >
                  <button className="checkout-add-cart-btn">Github</button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
