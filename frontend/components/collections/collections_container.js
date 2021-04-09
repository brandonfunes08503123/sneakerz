import { connect } from "react-redux";
import Collections from "./collections";

const mapStateToProps = (state) => ({
  sneakers: state.entities.collections,
});

const mapDispatchToProps = (dispatch) => ({
  // this would dispatch props to sort sneakers by size
});

export default connect(mapStateToProps, mapDispatchToProps)(Collections);
