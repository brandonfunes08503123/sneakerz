import React, { Component } from "react";

/**
 * Initial thoughts:
 * 
 * 1.) this.fetchAllProducts will be be on initial render
 * 
 * 
 *  <datalist className="products">
                { products.map( product => {

                })}
            </datalist>
 */

class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  matches() {
    let { input } = this.state;
    let { allSneakers } = this.props;
    const matches = [];
    if (input.length === 0) {
      return "";
    }

    Object.values(allSneakers).forEach((sneaker) => {
      const subStr = sneaker.name.slice(0, input.length);
      if (subStr.toLowerCase() === input.toLowerCase()) {
        matches.push(sneaker);
      }
      if (substr.includes(input)) {
        matches.push(sneaker);
      }
    });

    if (matches.length === 0) {
      matches.push("No matches");
    }

    return matches;
  }

  selectSneaker(event) {
    const name = event.currentTarget.innerText;
    this.setState({ input: name });
  }

  handleInputChange(e) {
    let { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    let { input } = this.state;
    let results;
    if (this.matches() === "") {
      results = "";
    } else {
      results = this.matches().map((result, i) => {
        return (
          <li key={i} onClick={this.selectSneaker}>
            {result.name}
          </li>
        );
      });
    }

    return (
      <div className="search-modal-container">
        <div className="search-modal-input">
          <div className="search-modal-input-wrapper">
            <input
              type="text"
              name="input"
              value={input}
              onChange={this.handleInputChange}
              placeholder="TYPE TO SEARCH "
              className="search-input"
            />
            <ul>{results}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchModal;

{
  /* <datalist id="sneakers" className="search-datalist">
  {sneakers.map((sneaker) => (
    <option
      className="search-option"
      key={sneaker.sku}
      value={sneaker.name}
    />
  ))}
</datalist>; */
}
