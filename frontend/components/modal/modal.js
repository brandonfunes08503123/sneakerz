import React, { Component } from "react";
import SearchModal from "./search/search_modal";
import MenuModal from "./menu/menu_modal";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClickOutside();
  }

  handleClickOutside() {
    this.props.closeModal();
  }

  render() {
    let { modal } = this.props;
    return (
      <div>
        {modal.length > 0 ? (
          modal === "search" ? (
            <div className="modal-background modal-container">
              <div
                className="modal-child"
                ref={(node) => (this.node = node)}
                onClick={(e) => e.stopPropagation()}
              >
                <SearchModal />
              </div>
            </div>
          ) : (
            <div
              className="modal-background modal-container"
              ref={(node) => (this.node = node)}
            >
              <div
                className="modal-child"
                ref={(node) => (this.node = node)}
                onClick={(e) => e.stopPropagation()}
              >
                <MenuModal />
              </div>
            </div>
          )
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Modal;
