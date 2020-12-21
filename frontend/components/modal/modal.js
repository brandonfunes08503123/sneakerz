import React, { Component, createRef } from "react";
import SearchContainer from "./search/search_container";
import MenuContainer from "./menu/menu_modal";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.modalChild = createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick(e) {
    try {
      if (this.modalChild.current.contains(e.target)) {
        return;
      }
    } catch (e) {
      e;
    }

    this.handleClickOutside();
  }

  handleClickOutside() {
    let {
      searchModal,
      menuModal,
      closeMenuModal,
      closeSearchModal,
    } = this.props;
    if (searchModal === "search") {
      closeSearchModal();
    } else if (menuModal === "menu") {
      closeMenuModal();
    }
  }

  handleSearch() {
    return (
      <div className="modal-background modal-container">
        <div
          className="modal-child"
          ref={this.modalChild}
          onClick={(e) => e.stopPropagation()}
        >
          <SearchContainer />
        </div>
      </div>
    );
  }

  handleMenu() {
    return (
      <div className="modal-background modal-container">
        <div
          className="modal-child"
          ref={this.modalChild}
          onClick={(e) => e.stopPropagation()}
        >
          <MenuContainer />
        </div>
      </div>
    );
  }

  render() {
    let { searchModal, menuModal } = this.props;
    let modal;

    if (searchModal.length === 0 && menuModal.length === 0) {
      return null;
    } else if (searchModal === "search") {
      modal = this.handleSearch();
    } else if (menuModal === "menu") {
      modal = this.handleMenu();
    }

    return <div>{modal}</div>;
  }
}

export default Modal;
