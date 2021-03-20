/**
 * This file contains the Sneaker component that will display
 * an individual sneaker based on the the sneakerId
 */
import React, { Component } from "react";

class Sneaker extends Component {
  componentDidMount() {
    console.log("These are the props: ", this.props);
    this.props.getSneaker();
  }
  render() {
    let { sneaker } = this.props;
    return (
      <div className="BigHeroContainer">
        {sneaker.length < 1 ? (
          " "
        ) : (
          <div className="HeroContainer">
            <div className="HeroPane-shoe">
              <img src={sneaker.photoUrls[1]} alt={`${sneaker.name}`}></img>
            </div>
            <div className="HeroPane-form-container">
              <div className="HeroPane-header-container">
                <header className="HeroPane-header">
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
        )}
      </div>
    );
  }
}

export default Sneaker;
