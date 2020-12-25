/**
 * This container will contain the state and dispatch
 * the correct actions for the Sneaker component
 */
import { connect } from "react-redux";
import Sneaker from "./sneaker";

const mapStateToProps = (state, { match }) => {
  let shoes = [];
  Object.values(state.entities.sneakers).map((shoe) => {
    if (shoe.sku === match.params.skuId) {
      shoes.push(shoe);
    }
  });

  let sneaker = shoes[0];
  return {
    sneaker,
  };
};

export default connect(mapStateToProps)(Sneaker);
