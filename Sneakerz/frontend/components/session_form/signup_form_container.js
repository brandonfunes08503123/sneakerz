import { signup, removeErrors } from "../../actions/session_actions";
import { connect } from "react-redux";
import SignUp from "./signup_form";

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "Sign Up",
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
