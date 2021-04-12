/**
 * This container will contain the state and dispatch
 * the correct actions for the Sneaker component
 */
import { connect } from "react-redux";
import { getSneaker, getAlsoViewed } from "../../actions/sneakers_actions";
import { addToCart } from "../../actions/cart_actions";
import Sneaker from "./sneaker";

const mapStateToProps = (state, { match }) => {
  return {
    sneaker: state.entities.sneaker,
    skuID: match.params.skuId,
    currentUser: state.session.id,
    alsoViewedSneakers: state.entities.alsoViewed,
  };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  getSneaker: () => dispatch(getSneaker(match.params.skuId)),
  getAlsoViewed: (sneakerID) => dispatch(getAlsoViewed(sneakerID)),
  addToCart: (currentUser, inventoryId) =>
    dispatch(addToCart(currentUser, inventoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sneaker);
