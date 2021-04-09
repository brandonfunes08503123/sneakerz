import { connect } from "react-redux";
import { closeSearchModal, closeMenuModal } from "../../actions/modal_actions";
import {
  getAdidasCollection,
  getYeezyCollection,
  getSbsCollection,
  getJordanCollection,
} from "../../actions/sneakers_actions";
import Modal from "./modal";
const mapStateToProps = (state) => {
  return {
    searchModal: state.ui.search,
    menuModal: state.ui.menu,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeSearchModal: () => dispatch(closeSearchModal()),
  getAdidasCollection: () => dispatch(getAdidasCollection()),
  getYeezyCollection: () => dispatch(getYeezyCollection()),
  getSbsCollection: () => dispatch(getSbsCollection()),
  getJordanCollection: () => dispatch(getJordanCollection()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
