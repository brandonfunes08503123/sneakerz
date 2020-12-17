import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openSearchModal, openMenuModal } from "../../actions/modal_actions";
import Navbar from "./navbar";

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  openSearchModal: (value) => dispatch(openSearchModal(value)),
  openMenuModal: (value) => dispatch(openMenuModal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
