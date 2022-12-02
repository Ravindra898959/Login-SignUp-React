import React, { useState } from "react";

const Modal = ({ closeModal }) => {
  return (
    <>
      <div className="main-modal">
        <div>
          <button
            className="btn"
            onClick={() => {
              closeModal(false);
            }}
          >
            x
          </button>
          <div className="modal-header">
            Are you want to continue to next page
          </div>
          <div className="modal-body">this is the body of the modal</div>
          <div className="modal-footer">this is footer of the modal</div>
          <button className="btn">Cancel</button>
          <button className="btn">Continue</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
