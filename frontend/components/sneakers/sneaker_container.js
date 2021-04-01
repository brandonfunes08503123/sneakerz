/**
 * This container will contain the state and dispatch
 * the correct actions for the Sneaker component
 */
import { connect } from "react-redux";
import { getSneaker } from "../../actions/sneakers_actions";
import { withRouter } from "react-router-dom";
import Sneaker from "./sneaker";

// const mapStateToProps = (state, { match }) => {
//   let shoes = [];
//   Object.values(state.entities.sneakers).map((shoe) => {
//     if (shoe.sku === match.params.skuId) {
//       shoes.push(shoe);
//     }
//   });

//   let sneaker = shoes[0];
//   return {
//     sneaker,
//     isAuthenticated: state.session.null,
//   };
// };

// const mapStateToProps = (state, { match }) => ({
//   sneaker: state.entities.sneaker,
//   skuID: match.params.skuId,
// });

const mapStateToProps = (state, { match }) => {
  return {
    sneaker: state.entities.sneaker,
    skuID: match.params.skuId,
  };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  getSneaker: () => dispatch(getSneaker(match.params.skuId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sneaker);
