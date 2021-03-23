import React, { Component } from "react";

class Inventory extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.props.closeInventory()}>
          Close Inventory
        </button>
      </div>
    );
  }
}

export default Inventory;
