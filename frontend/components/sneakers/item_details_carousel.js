import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function ItemDetailsCarousel(props) {
  let { itemDetails } = props;

  console.log("these are the item details: ", itemDetails);
  let propsDetails = [
    <div className="slide-items">
      <span className="slide-items-titles">brand</span>
      <span className="slide-items-details">{itemDetails.brand}</span>
    </div>,
    <div className="slide-items">
      <span className="slide-items-titles">date</span>
      <span className="slide-items-details">{itemDetails.date}</span>
    </div>,
    <div className="slide-items">
      <span className="slide-items-titles">sku</span>
      <span className="slide-items-details">{itemDetails.sku}</span>
    </div>,
    <div className="slide-items">
      <span className="slide-items-titles">main color</span>
      <span className="slide-items-details">{itemDetails.main_color}</span>
    </div>,
    <div className="slide-items">
      <span className="slide-items-titles">name</span>
      <div className="slide-items-details-container">
        <span className="slide-items-details">{itemDetails.name}</span>
      </div>
    </div>,

    <div className="slide-items">
      <span className="slide-items-titles">colorway</span>
      <div className="slide-items-details-container">
        <span className="slide-items-details">{itemDetails.colorway}</span>
      </div>
    </div>,
    <div className="slide-items">
      <span className="slide-items-titles">silhouette</span>
      <span className="slide-items-details">{itemDetails.silhouette}</span>
    </div>,
    <div className="slide-items">
      <span className="slide-items-titles">technology</span>
      <span className="slide-items-details">{itemDetails.technology}</span>
    </div>,
    <div className="slide-items">
      <span className="slide-items-titles">nickname</span>
      <span className="slide-items-details">{itemDetails.nickname}</span>
    </div>,
    <div className="slide-items">
      <span className="slide-items-titles">upper material</span>
      <span className="slide-items-details">{itemDetails.upper_material}</span>
    </div>,
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
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
    <Carousel
      partialVisible={true}
      responsive={responsive}
      className="carousel-container"
      customLeftArrow={<LeftArrow />}
      customRightArrow={<RightArrow />}
    >
      {propsDetails.map((detail, index) => {
        return <div key={index}>{detail}</div>;
      })}
    </Carousel>
  );
}

export default ItemDetailsCarousel;
