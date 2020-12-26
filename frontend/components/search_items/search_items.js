import React, { Component } from "react";

class SearchItems extends Component {
  constructor(props) {
    super(props);
    this.noResult = this.noResult.bind(this);
  }

  noResult() {
    return (
      <div className="noResult-container">No result. Please try again.</div>
    );
  }

  render() {
    let { items } = this.props;
    console.log(items.length);
    return (
      <div>
        {items.length > 0 ? (
          <div className="items-container">
            <div className="item-container">
              <ul className="item-list">
                {items.map((item, i) => {
                  return (
                    <li key={i} className="item">
                      <h2>{item.name}</h2>
                      <p>${item.price}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ) : (
          this.noResult()
        )}
      </div>
    );
  }
}

export default SearchItems;
