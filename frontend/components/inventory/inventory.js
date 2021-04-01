import React, { Component } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import InventoryItems from "./inventory_items";

// this creates a list of sizes and prices of a specific shoe

class Inventory extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { inventory, closeInventory, skuID } = this.props;
    return (
      <div className="ProductList-container">
        <IoMdClose
          size={25}
          className="ProductSelect-closeOut"
          onClick={() => closeInventory()}
        />
        <div className="ProductList-header">
          <h2>Buy New</h2>
          <h1>US Men Sizes</h1>
        </div>
        <div className="ProductList-items">
          {inventory.map((item) => (
            <a
              href={`#/sneaker/${skuID}/preCheckout`}
              className="ProductList-link-wrapper"
            >
              <InventoryItems sneakerItem={item} key={item.id} />
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Inventory;
