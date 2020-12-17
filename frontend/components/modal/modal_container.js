import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import Modal from "./modal";
const mapStateToProps = (state) => {
  console.log(`shape: ${JSON.stringify(state.ui)}`);
  return {
    modal: state.ui.search,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
