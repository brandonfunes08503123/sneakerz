import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class SessionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  renderErrors() {
    let { errors } = this.props;

    return (
      <ul className="HeroPane-session-errors">
        {errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  demoUser() {
    this.setState({
      email: "demo@demouser.com",
      password: "demo1234",
    });
  }

  render() {
    let { email, password } = this.state;
    return (
      <div className="BigHeroContainer">
        <div className="HeroContainer">
          <div className="HeroPane-shoe">
            <img src={window.images.banned1s} alt="1994_Banned_1s"></img>
          </div>
          <div className="HeroPane-form-container">
            <div className="HeroPane-header-container">
              <h1>Login</h1>
              <header className="HeroPane-header">
                <p>You need to be logged in to continue</p>
                <Link to="/signup">Sign Up</Link>
              </header>
              {this.renderErrors()}
            </div>
            <form onSubmit={this.handleSubmit} className="HeroPane-form">
              <div className="HeroPane-login-form">
                <label className="login-labels">Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleInputChange}
                  className="login-input"
                />

                <label className="login-labels">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleInputChange}
                  className="login-input"
                />
              </div>

              {/* {password.length > 4 ? (
                <div className="btns-container">
                  <button className="btn-login">Login</button>
                  <button className="btn-demo" onClick={() => this.demoUser()}>
                    Demo User
                  </button>
                </div>
              ) : (
                <div className="session-btns">
                  <button className="btn-login">{formType}</button>
                  <button className="btn-demo" onClick={() => this.demoUser()}>
                    Demo User
                  </button>
                </div>
              )} */}
              <div className="btns-container">
                <button className="btn-login">Login</button>
                <button className="btn-demo" onClick={() => this.demoUser()}>
                  Demo User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
