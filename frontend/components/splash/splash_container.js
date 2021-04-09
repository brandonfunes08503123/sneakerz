import { connect } from "react-redux";
import {
  getAdidasFrontPageCollection,
  getYeezyFrontPageCollection,
  getSbsFrontPageCollection,
  getJordanFrontPageCollection,
  getAdidasCollection,
  getYeezyCollection,
  getSbsCollection,
  getJordanCollection,
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
  getAdidasCollection: () => dispatch(getAdidasCollection()),
  getYeezyFrontPageCollection: () => dispatch(getYeezyFrontPageCollection()),
  getYeezyCollection: () => dispatch(getYeezyCollection()),
  getSbsFrontPageCollection: () => dispatch(getSbsFrontPageCollection()),
  getSbsCollection: () => dispatch(getSbsCollection()),
  getJordanFrontPageCollection: () => dispatch(getJordanFrontPageCollection()),
  getJordanCollection: () => dispatch(getJordanCollection()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
