import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function FrontPageCarousel(props) {
  let { sneakers } = props;

  console.log("These are the collecion sneakers: ", sneakers);

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

  const LeftArrow = (arrowProps) => {
    const { carouselState, children, ...restArrowProps } = arrowProps;

    return (
      <AiOutlineLeft size={30} className="buttonLeft" {...restArrowProps}>
        {children}
      </AiOutlineLeft>
    );
  };

  const RightArrow = (arrowProps) => {
    const { carouselState, children, ...restArrowProps } = arrowProps;

    return (
      <AiOutlineRight size={30} className="buttonRight" {...restArrowProps}>
        {children}
      </AiOutlineRight>
    );
  };

  return (
    <div className="section-img-container">
      <Carousel
        partialVisible={true}
        responsive={responsive}
        className="carousel-container"
        customLeftArrow={<LeftArrow />}
        customRightArrow={<RightArrow />}
      >
        {sneakers.map((sneaker, index) => {
          return (
            <Link
              to={`/sneaker/${sneaker.sku}`}
              className="carousel-shoe-wrapper"
              key={index}
            >
              <div className="carousel-shoe-link">
                <img
                  src={sneaker.photoUrl}
                  alt={sneaker.name}
                  className="carousel-shoe-img"
                />
              </div>
              <div className="carousel-shoe-detail-container">
                <div className="carousel-shoe-detail">{sneaker.name}</div>
              </div>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
}

export default FrontPageCarousel;
