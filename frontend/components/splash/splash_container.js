import { connect } from "react-redux";
import { getAllSneakers } from "../../actions/sneakers_actions";
import Splash from "./splash";

const mapStateToProps = (state) => ({
  allSneakers: state.entities.sneakers,
});

const mapDispatchToProps = (dispatch) => ({
  getAllSneakers: () => dispatch(getAllSneakers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
