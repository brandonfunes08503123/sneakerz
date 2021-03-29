import React, { Component, Fragment } from "react";

class InventoryItems extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { sneakerItem } = this.props;
    console.log("this is sneakerItem: ", sneakerItem);
    return (
      <div className="ProductItem-list">
        <div>{sneakerItem.size}M </div>
        <div>${sneakerItem.price}</div>
      </div>
    );
  }
}

export default InventoryItems;
