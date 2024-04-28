import React, { FC } from "react";
import ReactModal from "react-modal";
import { ModalProps } from "../types/ModalProps";
import "./Logout.css";

export const Logout: FC<ModalProps> = ({ isOpen, onClickToggle }) => {
  const onLogoutBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onClickToggle(e);
  };

  const onCancelBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClickToggle(e);
  };

  return (
    <ReactModal
      className="modal-menu"
      isOpen={isOpen}
      onRequestClose={onClickToggle}
      shouldCloseOnOverlayClick={true}
    >
      <form>
        <div className="logout-inputs">Are you sure you want to logout?</div>
        <div className="form-buttons form-buttons-sm">
          <div className="form-btn-left">
            <button
              style={{ marginLeft: ".5em" }}
              className="action-btn"
              onClick={onLogoutBtnClick}
            >
              Login
            </button>
            <button
              style={{ marginLeft: ".5em" }}
              className="cancel-btn"
              onClick={onCancelBtnClick}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </ReactModal>
  );
};
