import React, { Component } from "react";

class MenuModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // let { products } = this.props
    let { input } = this.state;
    return (
      <div className="search-modal-container">
        <div className="search-modal-input">
          <form onSubmit={this.handleSubmit} className="search-modal-form">
            <input
              type="text"
              name="input"
              value={input}
              onChange={this.handleInputChange}
              placeholder="TYPE TO SEARCH "
              className="form-input"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default MenuModal;
