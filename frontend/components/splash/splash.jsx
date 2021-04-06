/**
 * Splash is going to do a couple of Thing:
 *
 * 1.) section tag with image
 */
import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

class Splash extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <div className="splash-main-container">
        <div className>
          <img src={window.images.jubilee11s} alt="Jubilee 11s"></img>
        </div>
      </div>
    );
  }
}

export default Splash;
