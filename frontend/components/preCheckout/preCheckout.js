import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
class PreCheckout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { skuID, openProductPanel } = this.props;
    return (
      <div className="pre-checkout-container">
        <Link to={`/sneaker/${skuID}`}>
          <button onClick={() => openProductPanel()}> Cancel </button>
        </Link>
      </div>
    );
  }
}

export default PreCheckout;
