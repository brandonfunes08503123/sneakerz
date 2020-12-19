import { connect } from "react-redux";
import SearchModal from "./search_modal";

const mapStateToProps = (state) => ({
  allSneakers: state.entities.sneakers,
});

export default connect(mapStateToProps, null)(SearchModal);
