/**
 * Splash is going to do a couple of Thing:
 *
 * 1.) section tag with image
 */
import React, { Component } from "react";

class Splash extends Component {
  constructor(props) {
    super(props);
  }
  //Fetch all products after
  componentDidMount() {
    this.props.getAllSneakers();
  }

  render() {
    let { allSneakers } = this.props;
    return (
      <div className="splash-container">
        <img src={window.images.jubilee11s} alt="Jubilee 11s"></img>
      </div>
    );
  }
}

export default Splash;

{
  /* {allSneakers.length < 1 ? (
          <p>LOADING</p>
        ) : (
          Object.values(allSneakers).map((sneaker) => {
            return sneaker.photoUrls.map((photo) => {
              return <img src={photo} alt="photos" />;
            });
          })
        )} */
}
