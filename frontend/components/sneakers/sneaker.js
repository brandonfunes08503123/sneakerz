/**
 * This file contains the Sneaker component that will display
 * an individual sneaker based on the the sneakerId
 */
import React, { Component, Fragment } from "react";
import Inventory from "../inventory/inventory";
import InventoryDetails from "./inventory_details";

class Sneaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInventory: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.closeInventory = this.closeInventory.bind(this);
  }
  componentDidMount() {
    this.props.getSneaker();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.skuID !== prevProps.sneaker.sku &&
      prevProps.sneaker.length !== 0
    ) {
      this.props.getSneaker();
    }
  }

  handleClick() {
    this.setState({
      showInventory: true,
    });
  }

  closeInventory() {
    this.setState({
      showInventory: false,
    });
  }

  render() {
    let { sneaker } = this.props;
    // if this this.props.get snekar else loading
    return (
      <div className="ProductContainer">
        {sneaker.length < 1 || this.props.skuID !== sneaker.sku ? (
          " "
        ) : (
          <Fragment>
            <div className="HeroContainer">
              <div className="HeroPane-first-wrapper">
                <div className="HeroPane-shoe-wrapper">
                  <div className="ProductPane-shoe-wrapper">
                    <img
                      src={sneaker.photoUrl}
                      alt={`${sneaker.name}`}
                      className="sneakerImg"
                    ></img>
                  </div>
                </div>
              </div>

              <div className="ProductPane-container">
                {this.state.showInventory ? (
                  <Inventory
                    closeInventory={this.closeInventory}
                    inventory={this.props.sneaker.inventory}
                  />
                ) : (
                  <Fragment>
                    <div className="HeroPane-right">
                      <div className="ProductPane-header-container">
                        <header className="ProductPane-header">
                          <h1 className="ProductTitle">{sneaker.name}</h1>
                        </header>
                        <p className="ProductTitle_Sku">SKU: {sneaker.sku}</p>
                      </div>
                    </div>
                    <div className="btn-buy-container">
                      <button
                        onClick={() => this.handleClick()}
                        className="btn-buy"
                      >
                        Buy New
                      </button>
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
            <div className="ProductDetails">
              <h2 className="ProductDetails_Title">Product Details</h2>
              <p className="ProductDetails_Desc">{sneaker.description}</p>
            </div>
            <div className="Divider_Dash"></div>
            <InventoryDetails sneakerDetails={sneaker} />
          </Fragment>
        )}
      </div>
    );
  }
}

export default Sneaker;
