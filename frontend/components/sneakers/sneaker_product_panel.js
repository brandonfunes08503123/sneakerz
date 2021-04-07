import React, { Component, Fragment } from "react";
import Inventory from "../inventory/inventory";

class SneakerProductPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInventory: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.closeInventory = this.closeInventory.bind(this);
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
    let { closeProductPanel, sneaker, setSelectedSneaker } = this.props;
    return (
      <Fragment>
        {this.state.showInventory ? (
          <Inventory
            closeInventory={this.closeInventory}
            closeProductPanel={closeProductPanel}
            setSelectedSneaker={setSelectedSneaker}
            inventory={sneaker.inventory}
            skuID={sneaker.sku}
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
              <button onClick={() => this.handleClick()} className="btn-buy">
                Buy New
              </button>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default SneakerProductPanel;
