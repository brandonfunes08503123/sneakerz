import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import _ from "lodash";

class SearchModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.popularSearch = this.popularSearch.bind(this);
    this.noMatches = this.noMatches.bind(this);
    this.searchedValue = _.debounce(this.searchedValue, 400);
  }

  handleInputChange(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });

    this.searchedValue(value);
  }

  searchedValue(value) {
    this.props.searchValue(value);
  }

  noMatches() {
    return (
      <Fragment>
        <div className="results-container">
          <p className="results-container-input">{this.state.input}</p>
          <p className="results-container-length">0 RESULTS</p>
        </div>
        <div className="trending-container">
          <h3>NO RESULTS FOUND</h3>
        </div>
      </Fragment>
    );
  }

  popularSearch() {
    let {
      getAdidasCollection,
      getYeezyCollection,
      getSbsCollection,
      getJordanCollection,
      closeSearchModal,
    } = this.props;
    return (
      <div className="search-section-container">
        <h3>Popular Searches</h3>
        <ul className="search-list">
          <Link
            to="/sneakers/collections"
            onClick={() => {
              getJordanCollection(), closeSearchModal();
            }}
          >
            <li className="search-items">
              Jordan
              <IoIosArrowForward size={16} />
            </li>
          </Link>

          <Link
            to="/sneakers/collections"
            onClick={() => {
              getYeezyCollection(), closeSearchModal();
            }}
          >
            <li className="search-items">
              Yeezy
              <IoIosArrowForward size={16} />
            </li>
          </Link>
          <Link
            to="/sneakers/collections"
            onClick={() => {
              getAdidasCollection(), closeSearchModal();
            }}
          >
            <li className="search-items">
              Adidas
              <IoIosArrowForward size={16} />
            </li>
          </Link>
          <Link
            to="/sneakers/collections"
            onClick={() => {
              getSbsCollection(), closeSearchModal();
            }}
          >
            <li className="search-items">
              Nike Sb
              <IoIosArrowForward size={16} />
            </li>
          </Link>
        </ul>
      </div>
    );
  }

  render() {
    let { input } = this.state;
    let { closeSearchModal, searchResults, getSneaker } = this.props;
    let results;

    results = searchResults.map((result, i) => {
      return (
        <li className="search-results" key={i}>
          <Link
            to={`/sneaker/${result.sku}`}
            onClick={() => {
              closeSearchModal();
            }}
            className="results-link"
          >
            <div className="results-item-container">
              {result.name}
              <IoIosArrowForward size={16} className="results-icon" />
            </div>
          </Link>
        </li>
      );
    });

    return (
      <div className="search-modal-container">
        <div className="search-modal-input">
          <div className="search-modal-input-wrapper">
            <Link
              to={`/search?query=${input}`}
              className="nav-item nav-icon"
              onClick={() => closeSearchModal()}
            >
              <IoSearchOutline size={24} />
            </Link>
            <input
              type="text"
              name="input"
              value={input}
              onChange={this.handleInputChange}
              placeholder="TYPE TO SEARCH"
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
              {typeof searchResults[0] === "string" ? (
                this.noMatches()
              ) : (
                <Fragment>
                  <div className="results-container">
                    <p className="results-container-input">{input}</p>
                    <p className="results-container-length">
                      {searchResults.length} RESULT
                    </p>
                  </div>
                  <div className="trending-container">
                    <h3>Trending</h3>
                  </div>
                  <ul className="search-results-container">{results}</ul>
                </Fragment>
              )}
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default SearchModal;
