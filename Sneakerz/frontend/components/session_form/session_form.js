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

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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
      <ul>
        {errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    let { formType } = this.props;
    let { email, password } = this.state;

    return (
      <div className="BigHeroContainer">
        <div className="HeroContainer">
          <div className="HeroPane-shoe"></div>
          <div className="HeroPane-form-container">
            <div className="HeroPane-header">
              <h3> {formType} </h3>
              <Link to="/signup">Sign Up</Link>
            </div>
            <form onSubmit={this.handleSubmit} className="HeroPane-form">
              {this.renderErrors}

              <label>Email</label>
              <input
                //   type="email"
                type="text"
                name="email"
                value={email}
                //className="HeroPane-input"
                onChange={this.handleInputChange}
              />

              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                //className="HeroPane-input"
                onChange={this.handleInputChange}
              />

              {password.length > 4 ? (
                <button className="btn">{formType}</button>
              ) : (
                <button disabled>{formType}</button>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
