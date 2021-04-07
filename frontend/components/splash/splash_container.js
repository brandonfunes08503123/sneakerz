import { connect } from "react-redux";
import {
  getAdidasFrontPageCollection,
  getYeezyFrontPageCollection,
  getSbsFrontPageCollection,
  getJordanFrontPageCollection,
} from "../../actions/sneakers_actions";
import Splash from "./splash";

const mapStateToProps = (state) => ({
  adidasFrontPageCollection: state.entities.adidasFrontPageCollection,
  jordanFrontPageCollection: state.entities.jordanFrontPageCollection,
  sbsFrontPageCollection: state.entities.sbsFrontPageCollection,
  yeezyFrontPageCollection: state.entities.yeezyFrontPageCollection,
});

const mapDispatchToProps = (dispatch) => ({
  getAdidasFrontPageCollection: () => dispatch(getAdidasFrontPageCollection()),
  getYeezyFrontPageCollection: () => dispatch(getYeezyFrontPageCollection()),
  getSbsFrontPageCollection: () => dispatch(getSbsFrontPageCollection()),
  getJordanFrontPageCollection: () => dispatch(getJordanFrontPageCollection()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
