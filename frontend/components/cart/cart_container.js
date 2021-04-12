import { connect } from "react-redux";
import Cart from "./cart";
import { getUserCart } from "../../actions/cart_actions";

const mapStateToProps = (state) => ({
  currentUser: state.session.id,
  cart: state.entities.cart,
});

const mapDispatchToProps = (dispatch) => ({
  getUserCart: () => dispatch(getUserCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
