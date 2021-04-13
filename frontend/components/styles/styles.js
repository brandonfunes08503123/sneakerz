import React from "react";
import { Link } from "react-router-dom";

function Styles() {
  return (
    <div className="styles-main-container">
      <div className="styles-header-container">
        <h1 className="styles-header-title">On Feet Styles</h1>
        <span className="styles-header">
          Daily inspiration from our community. Scroll to discover and shop
          trending styles.
        </span>
      </div>
      <div className="styles-container">
        <div className="style-item">
          <Link to="/sneaker/AH2203">
            <img src={window.images.beluga} />
          </Link>
        </div>
        <div className="style-item">
          <img src={window.images.motorsports} />
        </div>
        <div className="style-item">
          <Link to="/sneaker/322719161">
            <img src={window.images.carmine} />
          </Link>
        </div>
        <div className="style-item">
          <Link to="/sneaker/308497162">
            <img src={window.images.mars} />
          </Link>
        </div>
        <div className="style-item">
          <Link to="/sneaker/BB0619">
            <img src={window.images.human_race} />
          </Link>
        </div>
        <div className="style-item">
          <Link to="/sneaker/378037107">
            <img src={window.images.concord} />
          </Link>
        </div>
        <div className="style-item">
          <Link to="/sneaker/BB1839">
            <img src={window.images.black_750} />
          </Link>
        </div>
        <div className="style-item">
          <Link to="/sneaker/BB1840">
            <img src={window.images.grey_750} />
          </Link>
        </div>
        <div className="style-item">
          <Link to="/sneaker/AQ5731">
            <img src={window.images.y3} />
          </Link>
        </div>
        <div className="style-item">
          <Link to="/sneaker/AQ4791">
            <img src={window.images.nmd_red_white} />
          </Link>
        </div>
        <div className="style-item">
          <Link to="/sneaker/S80636">
            <img src={window.images.oreo} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Styles;
