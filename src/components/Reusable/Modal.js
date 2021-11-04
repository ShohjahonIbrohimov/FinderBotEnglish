import React from "react";
import { general_icons } from "../../constants/icons";

const Modal = ({ open, setopen, children, width = "50%" }) => {
  const handleClose = () => {
    setopen(false);
  };

  return (
    <div
      id="modal-window"
      className={`hideModal shadow ${open ? "showModal" : ""}`}
    >
      <div className="main-modal" style={{ width }}>
        <span onClick={handleClose} className="modal_close_btn">
          {general_icons.close_circle}
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
