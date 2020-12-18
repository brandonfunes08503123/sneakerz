import { connect } from "react-redux";
import { closeSearchModal, closeMenuModal } from "../../actions/modal_actions";
import Modal from "./modal";
const mapStateToProps = (state) => {
  return {
    searchModal: state.ui.search,
    menuModal: state.ui.menu,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeSearchModal: () => dispatch(closeSearchModal()),
  closeMenuModal: () => dispatch(closeMenuModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
