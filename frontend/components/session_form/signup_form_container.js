import { signup, removeErrors } from "../../actions/session_actions";
import { connect } from "react-redux";
import SignupForm from "./signup_form";

const mapStateToProps = (state) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
