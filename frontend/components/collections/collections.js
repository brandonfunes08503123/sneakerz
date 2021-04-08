import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Collections extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { sneakers } = this.props;

    return (
      <div className="collections-container">
        {sneakers.length < 1 ? (
          " "
        ) : (
          <Fragment>
            <div className="collections-header-container">
              <h1 className="collections-header">{sneakers[0].brand}</h1>
            </div>
            <div className="collections-grid-container">
              <div className="collections-grid">
                {sneakers.map((sneaker, idx) => {
                  return (
                    <Link
                      to={`/sneaker/${sneaker.sku}`}
                      className="collections-item"
                      key={idx}
                    >
                      <div className="collections-img-container">
                        <img src={sneaker.photoUrl} alt={sneaker.name} />
                      </div>
                      <div className="collections-name-container">
                        {sneaker.name}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Collections;
