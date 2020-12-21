/**
 * This container will contain the state and dispatch
 * the correct actions for the Sneaker component
 */
import { connect } from "react-redux";
import Sneakers from "./sneakers";

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Sneakers);
