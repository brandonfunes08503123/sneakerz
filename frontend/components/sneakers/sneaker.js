/**
 * This file contains the Sneaker component that will display
 * an individual sneaker based on the the sneakerId
 */
import React, { Component } from "react";

class Sneaker extends Component {
  render() {
    let { sneaker } = this.props;
    return (
      <div className="BigHeroContainer">
        <div className="HeroContainer">
          <div className="HeroPane-shoe">
            <img src={sneaker.photoUrls[1]} alt={`${sneaker.name}`}></img>
          </div>
          <div className="HeroPane-form-container">
            <div className="HeroPane-header-container">
              <header className="HeroPane-header">
                <h1>{sneaker.name}</h1>
              </header>
            </div>
            <form onSubmit={this.handleSubmit} className="HeroPane-form">
              <div className="btns-container">
                <button className="btn-login">Login</button>
                <button className="btn-demo" onClick={() => this.demoUser()}>
                  Demo User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Sneaker;
//   <div>HELLO THIS IS IT {this.props.sneaker.name}</div>
