/**
 * This container will contain the state and dispatch
 * the correct actions for the Sneaker component
 */
import { connect } from "react-redux";
import Sneaker from "./sneaker";

// ownProps destructured

const mapStateToProps = (state, { match }) => {
  let shoe = Object.values(state.entities.sneakers).map((shoe) => {
    if (shoe.sku === match.params.skuId) {
      return shoe;
    } else {
      return {};
    }
  });
  let sneaker = shoe[0];
  return {
    sneaker,
  };
};

export default connect(mapStateToProps)(Sneaker);
