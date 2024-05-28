import React, { FC, useReducer } from "react";
import "../../App.css";
import { Modal } from "../common/Modal";
import { ModalProps } from "../types/ModalProps";
import "./Registration.css";
import { allowSubmit } from "./common/Helpers";
import { PasswordForm } from "./common/PasswordForm";
import { actions, getInitialState, reducer } from "./common/UserReducer";

export const Registration: FC<ModalProps> = ({
  isOpen,
  onVisibilityToggle,
}) => {
  const [
    {
      username,
      password,
      passwordConfirmation,
      resultMessage,
      isSubmitEnabled,
    },
    dispatch,
  ] = useReducer(reducer, getInitialState());

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    dispatch(actions.setUsername(value));
    if (!value) {
      allowSubmit(dispatch, false, "Username can not be empty");
    } else {
      allowSubmit(dispatch, true);
    }
  };

  const onRegisterBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onVisibilityToggle(e);
  };

  const onCancelBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onVisibilityToggle(e);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onVisibilityToggle}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
    >
      <form>
        <div className="reg-inputs">
          <div>
            <label>username</label>
            <input type="text" value={username} onChange={onUsernameChange} />
          </div>
          <PasswordForm
            password={password}
            passwordConfirmation={passwordConfirmation}
            dispatch={dispatch}
          />
        </div>
        <div className="form-buttons">
          <div className="form-btn-left">
            <button
              style={{ marginLeft: ".5em" }}
              className="action-btn"
              disabled={!isSubmitEnabled}
              onClick={onRegisterBtnClick}
            >
              Register
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
    </Modal>
  );
};
