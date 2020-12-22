/**
 * Splash is going to do a couple of Thing:
 *
 * 1.) section tag with image
 */
import React, { Component } from "react";

class Splash extends Component {
  componentDidMount() {
    this.props.getAllSneakers();
  }

  render() {
    return (
      <div className="splash-container">
        <img src={window.images.jubilee11s} alt="Jubilee 11s"></img>
      </div>
    );
  }
}

export default Splash;
