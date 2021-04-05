// import React, { useState, useEffect } from "react";

// got to fix the designer

// import "react-multi-carousel/lib/styles.css";
// function ItemDetailsCarousel(props) {
//   const [x, setX] = useState(0);

//   let { itemDetails } = props;
//   let propsDetails = [
//     <div className="slide-items">
//       <span className="slide-items-titles">brand</span>
//       <span className="slide-items-details">{itemDetails.brand}</span>
//     </div>,
//     <div className="slide-items">
//       <span className="slide-items-titles">date</span>
//       <span className="slide-items-details">{itemDetails.date}</span>
//     </div>,
//     <div className="slide-items">
//       <span className="slide-items-titles">sku</span>
//       <span className="slide-items-details">{itemDetails.sku}</span>
//     </div>,
//     <div className="slide-items">
//       <span className="slide-items-titles">main color</span>
//       <span className="slide-items-details">{itemDetails.main_color}</span>
//     </div>,
//     <div className="slide-items">
//       <span className="slide-items-titles">name</span>
//       <span className="slide-items-details">{itemDetails.name}</span>
//     </div>,

//     <div className="slide-items">
//       <span className="slide-items-titles">colorway</span>
//       <span className="slide-items-details">{itemDetails.colorway}</span>
//     </div>,
//     <div className="slide-items">
//       <span className="slide-items-titles">silhouette</span>
//       <span className="slide-items-details">{itemDetails.silhouette}</span>
//     </div>,
//     <div className="slide-items">
//       <span className="slide-items-titles">technology</span>
//       <span className="slide-items-details">{itemDetails.technology}</span>
//     </div>,
//     <div className="slide-items">
//       <span className="slide-items-titles">nickname</span>
//       <span className="slide-items-details">{itemDetails.nickname}</span>
//     </div>,
//     <div className="slide-items">
//       <span className="slide-items-titles">upper material</span>
//       <span className="slide-items-details">{itemDetails.upper_material}</span>
//     </div>,
//   ];

//   const goLeft = () => {
//     if (window.innerWidth <= 1280) {
//       x === 0 ? setX(-121 * (propsDetails.length - 6)) : setX(x + 121);
//     } else {
//       x === 0 ? setX(-125 * (propsDetails.length - 8)) : setX(x + 125);
//     }
//   };

//   const goRight = () => {
//     if (window.innerWidth <= 1280) {
//       // x === -121 * (propsDetails.length - 6) ? setX(0) : setX(x - 121);
//       x === -100 * (propsDetails.length - 6) ? setX(0) : setX(x - 100);
//     } else {
//       // x === -125 * (propsDetails.length - 8) ? setX(0) : setX(x - 125);
//       x === -100 * (propsDetails.length - 8) ? setX(0) : setX(x - 100);
//     }
//   };
//   // designer

//   return (
//     <div className="slider">
//       {propsDetails.map((item, index) => {
//         return (
//           <div
//             key={index}
//             className="slide"
//             style={{ transform: `translateX(${x}%)` }}
//           >
//             {item}
//           </div>
//         );
//       })}

//       <AiOutlineLeft
//         size={30}
//         className="buttonLeft"
//         onClick={() => goLeft()}
//       />
//       <AiOutlineRight
//         size={30}
//         className="buttonRight"
//         onClick={() => goRight()}
//       />
//     </div>
//   );
// }

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function ItemDetailsCarousel(props) {
  let { itemDetails } = props;
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
      <span className="slide-items-details">{itemDetails.name}</span>
    </div>,

    <div className="slide-items">
      <span className="slide-items-titles">colorway</span>
      <span className="slide-items-details">{itemDetails.colorway}</span>
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

  return (
    <Carousel
      partialVisible={true}
      responsive={responsive}
      className="carousel-container"
      customLeftArrow={<AiOutlineLeft size={30} className="buttonLeft" />}
      customRightArrow={<AiOutlineRight size={30} className="buttonRight" />}
    >
      {propsDetails.map((detail, index) => {
        return <div key={index}>{detail}</div>;
      })}
    </Carousel>
  );
}

export default ItemDetailsCarousel;
