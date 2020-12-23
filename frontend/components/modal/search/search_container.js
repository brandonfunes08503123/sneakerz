import { connect } from "react-redux";
import { closeSearchModal } from "../../../actions/modal_actions";
import SearchModal from "./search_modal";

const mapStateToProps = (state) => ({
  allSneakers: state.entities.sneakers,
});

const mapDispatchToProps = (dispatch) => ({
  closeSearchModal: () => dispatch(closeSearchModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);
