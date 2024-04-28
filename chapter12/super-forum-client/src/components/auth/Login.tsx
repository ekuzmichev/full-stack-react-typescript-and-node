import React, { FC, useReducer } from "react";
import { ModalProps } from "../types/ModalProps";
import "./../../App.css";
import { allowSubmit } from "./common/Helpers";
import { actions, getInitialState, reducer } from "./common/UserReducer";
import ReactModal from "react-modal";

export const Login: FC<ModalProps> = ({ isOpen, onClickToggle }) => {
  const [{ username, password, resultMessage, isSubmitEnabled }, dispatch] =
    useReducer(reducer, getInitialState());

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    dispatch(actions.setUsername(value));
    if (!value) {
      allowSubmit(dispatch, "Username can not be empty", false);
    } else {
      allowSubmit(dispatch, "", true);
    }
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    dispatch(actions.setPassword(value));
    if (!value) {
      allowSubmit(dispatch, "Password cannot be empty", false);
    } else {
      allowSubmit(dispatch, "", true);
    }
  };

  const onLoginBtnClick = (
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
      ariaHideApp={false}
    >
      <form>
        <div className="reg-inputs">
          <div>
            <label>username</label>
            <input type="text" value={username} onChange={onUsernameChange} />
          </div>
          <div>
            <label>password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onPasswordChange}
            />
          </div>
        </div>
        <div className="form-buttons form-buttons-sm">
          <div className="form-btn-left">
            <button
              style={{ marginLeft: ".5em" }}
              className="action-btn"
              disabled={!isSubmitEnabled}
              onClick={onLoginBtnClick}
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
          <span className="form-btn-right">
            <strong>{resultMessage}</strong>
          </span>
        </div>
      </form>
    </ReactModal>
  );
};
