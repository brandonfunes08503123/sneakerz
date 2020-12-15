import { login, removeErrors } from "../../actions/session_actions";
import { connect } from "react-redux";
import Login from "./login_form";

const mapStateToProps = (state) => ({
  errors: state.errors.session,
  formType: "Login",
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
