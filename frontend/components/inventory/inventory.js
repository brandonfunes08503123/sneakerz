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
    let { inventory, closeInventory, skuID, closeProductPanel } = this.props;
    console.log("inventory: ", inventory);
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
            <Link
              to={`/sneaker/${skuID}/pre-checkout-review`}
              className="ProductList-link-wrapper"
              key={`inventory_link_${item.id}`}
              onClick={() => {
                closeInventory();
                closeProductPanel();
              }}
            >
              <InventoryItems sneakerItem={item} key={`inventory_${item.id}`} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Inventory;
