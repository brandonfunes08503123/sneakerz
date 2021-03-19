import { connect } from "react-redux";
import { closeSearchModal } from "../../../actions/modal_actions";
import { searchValue } from "../../../actions/search_actions";
import SearchModal from "./search_modal";

const mapStateToProps = (state) => ({
  // allSneakers: state.entities.sneakers,
  searchResults: state.searchResults,
});

const mapDispatchToProps = (dispatch) => ({
  closeSearchModal: () => dispatch(closeSearchModal()),
  searchValue: (value) => dispatch(searchValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);
