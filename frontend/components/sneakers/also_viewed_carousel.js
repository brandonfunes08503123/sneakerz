import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function AlsoViewedCarousel(props) {
  let { sneakers } = props;

  console.log("These are the passed sneakers: ", sneakers);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
    },
  };
  return (
    <div className="main-carousel-container">
      <div className="people-viewed-container">
        <h3>People Also Viewed</h3>
      </div>
      <div className="section-img-container">
        <Carousel
          partialVisible={true}
          responsive={responsive}
          className="carousel-container"
          customLeftArrow={<AiOutlineLeft size={30} className="buttonLeft" />}
          customRightArrow={
            <AiOutlineRight size={30} className="buttonRight" />
          }
        >
          {sneakers.map((sneaker, index) => {
            return (
              <div className="carousel-shoe-wrapper" key={index}>
                <Link
                  to={`/sneaker/${sneaker.sku}`}
                  className="carousel-shoe-link"
                >
                  <img
                    src={sneaker.photoUrl}
                    alt={sneaker.name}
                    className="carousel-shoe-img"
                  ></img>
                </Link>
                <div className="carousel-shoe-detail-container">
                  <div className="carousel-shoe-detail">{sneaker.name}</div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default AlsoViewedCarousel;
