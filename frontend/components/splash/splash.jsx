import React, { Component } from "react";
import FrontPageCarousel from "./front_page_carousel";

class Splash extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAdidasFrontPageCollection();
    this.props.getJordanFrontPageCollection();
    this.props.getSbsFrontPageCollection();
    this.props.getYeezyFrontPageCollection();
  }

  render() {
    let {
      adidasFrontPageCollection,
      jordanFrontPageCollection,
      sbsFrontPageCollection,
      yeezyFrontPageCollection,
    } = this.props;
    return (
      <div className="splash-main-container">
        <div className="front-page-img-container">
          <img src={window.images.jubilee11s} alt="Jubilee 11s"></img>
        </div>
        <div className="sneaker-front-page-container">
          <div className="sneaker-header-container">
            <h3>Air Jordans</h3>
          </div>
          <div className="front_page_collection">
            <FrontPageCarousel sneakers={jordanFrontPageCollection} />
          </div>
        </div>

        <div className="front-page-img-container">
          <img src={window.images.sbs} alt="Sbs_Skateboard"></img>
        </div>
        <div className="sneaker-front-page-container">
          <div className="sneaker-header-container">
            <h3>Nostalgic Nike Sbs Collection</h3>
          </div>
          <div className="front_page_collection">
            <FrontPageCarousel sneakers={sbsFrontPageCollection} />
          </div>
        </div>

        <div className="front-page-img-container">
          <img src={window.images.sns} alt="SNS Ultraboosts"></img>
        </div>
        <div className="sneaker-front-page-container">
          <div className="sneaker-header-container">
            <h3>Adidas Collection</h3>
          </div>
          <div className="front_page_collection">
            <FrontPageCarousel sneakers={adidasFrontPageCollection} />
          </div>
        </div>

        <div className="front-page-img-container">
          <img src={window.images.kyanite} alt="SNS Ultraboosts"></img>
        </div>
        <div className="sneaker-front-page-container">
          <div className="sneaker-header-container">
            <h3>Yeezy Collection</h3>
          </div>
          <div className="front_page_collection">
            <FrontPageCarousel sneakers={yeezyFrontPageCollection} />
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
