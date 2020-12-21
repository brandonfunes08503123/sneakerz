import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.popularSearch = this.popularSearch.bind(this);
  }

  handleInputChange(e) {
    let { name, value } = e.target;

    this.setState({
      [name]: value,
    });
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
    });

    if (matches.length === 0) {
      matches.push("No matches");
    }

    return matches;
  }

  popularSearch() {
    return (
      <div className="search-section-container">
        <h3>Popular Searches</h3>
        <ul className="search-list">
          <li className="search-items">
            Nike
            <IoIosArrowForward size={16} />
          </li>
          <li className="search-items">
            Jordan
            <IoIosArrowForward size={16} />
          </li>
          <li className="search-items">
            Adidas
            <IoIosArrowForward size={16} />
          </li>
        </ul>
      </div>
    );
  }

  render() {
    let { input } = this.state;
    let results;

    if (this.matches() === "") {
      results = "";
    } else {
      results = this.matches().map((result, i) => {
        return (
          <li className="search-results" key={i}>
            <Link
              to={`sneakers/${result.sku}`}
              onClick={() => this.props.closeModal()}
            >
              {result.name}
            </Link>
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
          </div>
          <div className="apparel-type-container">
            <p>Sneakers</p>
          </div>
          {input.length < 1 ? (
            this.popularSearch()
          ) : (
            <Fragment>
              <div className="results-container">
                <p>{input}</p>
                <p>{results.length} RESULT</p>
              </div>
              <ul className="search-results-container">{results}</ul>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default SearchModal;
