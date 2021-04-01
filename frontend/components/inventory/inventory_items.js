import React, { Component } from "react";
import { Route } from "react-router-dom";
import OrderTicket from "../order_ticket/order_ticket";

class InventoryItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { sneakerItem } = this.props;
    return (
      <div className="ProductItem-list">
        {sneakerItem.size}M ${sneakerItem.price}
      </div>
    );
  }
}

export default InventoryItems;
