import React, { Component, Fragment } from "react";
import { IoMdClose } from "react-icons/io";
import InventoryItems from "./inventory_items";

class Inventory extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { inventory, closeInventory } = this.props;
    console.log("this is the inventory: ", inventory);
    return (
      <div className="ProductList-container">
        <IoMdClose
          size={25}
          className="ProductSelect-closeOut"
          onClick={() => this.props.closeInventory()}
        />
        <div className="ProductList-header">
          <h2>Buy New</h2>
          <h1>US Men Sizes</h1>
        </div>
        <div className="ProductList-items">
          {inventory.map((item, index) => {
            <InventoryItems item={item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default Inventory;

/**
 *  
        <div className="ProductSelectSize-scrollable">
          <header className="ProductSelectSize-header">
            <h2>Buy New</h2>
            <h1>US Men Sizes</h1>
          </header>
        </div>

        {inventory.map((item, index) => (
          <InventoryItems sneakerItem={item} key={index} />
        ))}
 */
