import { connect } from "react-redux";
import Cart from "./cart";
import { getUserCart, removeItem } from "../../actions/cart_actions";

const mapStateToProps = (state) => ({
  currentUser: state.session.id,
  cart: state.entities.cart,
});

const mapDispatchToProps = (dispatch) => ({
  getUserCart: () => dispatch(getUserCart()),
  removeItem: (itemId) => dispatch(removeItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
