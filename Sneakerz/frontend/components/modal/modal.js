import React from "react";
import SearchModal from "./search_modal";

let Modal = ({ modal, closeModal }) => {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case "search":
      component = <SearchModal />;
      break;
    case "menu":
      component = <MenuModal />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background modal-container" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default Modal;
