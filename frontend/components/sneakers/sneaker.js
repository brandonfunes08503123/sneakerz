/**
 * This file contains the Sneaker component that will display
 * an individual sneaker based on the the sneakerId
 */
import React, { Component, Fragment } from "react";

class Sneaker extends Component {
  componentDidMount() {
    this.props.getSneaker();
  }
  render() {
    let { sneaker } = this.props;
    return (
      <div className="ProductContainer">
        {sneaker.length < 1 ? (
          " "
        ) : (
          <Fragment>
            <div className="HeroContainer">
              <div className="HeroPane-shoe">
                <img src={sneaker.photoUrl} alt={`${sneaker.name}`}></img>
              </div>
              <div className="ProductPane-form-container">
                <div className="ProductPane-header-container">
                  <header className="ProductPane-header">
                    <h1 className="ProductTitle">{sneaker.name}</h1>
                  </header>
                  <p className="ProductTitle_Sku">SKU: {sneaker.sku}</p>
                </div>
                <form onSubmit={this.handleSubmit} className="HeroPane-form">
                  <div className="btns-container">
                    <button className="btn-login" onClick={() => <Listing />}>
                      Buy New
                    </button>
                    <button className="btn-demo">Buy Used</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="ProductDetails">
              <h2 className="ProductDetails_Title">Product Details</h2>
              <p className="ProductDetails_Desc">{sneaker.description}</p>
            </div>
            <div className="Divider_Dash"></div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Sneaker;
