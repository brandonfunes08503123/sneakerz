import React, { Component } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// got to fix the designer

class InventoryDetails extends Component {
  render() {
    let {
      brand,
      colorway,
      date,
      main_color,
      name,
      nickname,
      silhouette,
      technology,
      upper_material,
    } = this.props;

    let propsDetails = [
      brand,
      date,
      sku,
      main_color,
      colorway,
      upper_material,
      silhouette,
      technology,
      upper_material,
    ];
    return (
      <div className="details-carousel">
        <div className="details-carousel-content">
          <div className="details-carousel-item">{brand}</div>
          <div className="details-carousel-item">{date}</div>
          <div className="details-carousel-item">{sku}</div>
          <div className="details-carousel-item">{main_color}</div>
          <div className="details-carousel-item">{colorway}</div>
          <div className="details-carousel-item">{upper_material}</div>
          {/* <div className="details-carousel-item">{designer}</div> */}
          <div className="details-carousel-item">{silhouette}</div>
          <div className="details-carousel-item">{nickname}</div>
          <div className="details-carousel-item">{technology}</div>
        </div>
      </div>
    );
  }
}

export default InventoryDetails;
