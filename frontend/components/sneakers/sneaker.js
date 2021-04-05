/**
 * This file contains the Sneaker component that will display
 * an individual sneaker based on the the sneakerId
 */
import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import SneakerProductPanel from "./sneaker_product_panel";
import ItemDetailsCarousel from "./item_details_carousel";

// import Carousel from "react-multi-carousel";

// import "react-multi-carousel/lib/styles.css";

import PreCheckout from "../preCheckout/preCheckout";

class Sneaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInventory: false,
      showProductPanel: true,
      selectedSneaker: null,
    };

    this.closeProductPanel = this.closeProductPanel.bind(this);
    this.openProductPanel = this.openProductPanel.bind(this);
    this.setSelectedSneaker = this.setSelectedSneaker.bind(this);
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

  closeProductPanel() {
    this.setState({
      showProductPanel: false,
    });
  }

  openProductPanel() {
    this.setState({
      showProductPanel: true,
    });
  }

  setSelectedSneaker(sneaker) {
    this.setState({
      selectedSneaker: sneaker,
    });
  }

  render() {
    let { sneaker, currentUser } = this.props;

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 7,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
      },
    };

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
                {this.state.showProductPanel ? (
                  <SneakerProductPanel
                    closeProductPanel={this.closeProductPanel}
                    setSelectedSneaker={this.setSelectedSneaker}
                    sneaker={sneaker}
                  />
                ) : (
                  <Route path="/sneaker/:skuID/pre-checkout-review">
                    <PreCheckout
                      selectedSneaker={this.state.selectedSneaker}
                      sneaker={sneaker}
                      openProductPanel={this.openProductPanel}
                      currentUser={currentUser}
                    />
                  </Route>
                )}
              </div>
            </div>
            <div className="ProductDetails">
              <h2 className="ProductDetails_Title">Product Details</h2>
              <p className="ProductDetails_Desc">{sneaker.description}</p>
            </div>
            <ItemDetailsCarousel itemDetails={sneaker} />
          </Fragment>
        )}
      </div>
    );
  }
}

export default Sneaker;
