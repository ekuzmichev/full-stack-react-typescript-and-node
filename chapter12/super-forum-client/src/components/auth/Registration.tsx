import React, { FC, useReducer } from "react";
import ReactModal from "react-modal";
import {
  PasswordValidationResult,
  isPasswordValid,
} from "../../common/validators/PasswordValidator";
import { ModalProps } from "../types/ModalProps";
import "./../../App.css";
import "./Registration.css";
import { allowSubmit } from "./common/Helpers";
import { actions, getInitialState, reducer } from "./common/UserReducer";

export const Registration: FC<ModalProps> = ({ isOpen, onClickToggle }) => {
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

  const checkPasswordsMatch = (
    password: string,
    passwordConfirmation: string
  ): boolean => {
    if (password !== passwordConfirmation) {
      allowSubmit(dispatch, "Passwords do not match", false);
      return false;
    } else {
      allowSubmit(dispatch, "", true);
      return true;
    }
  };

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
    const passwordTestResult: PasswordValidationResult = isPasswordValid(value);
    if (!passwordTestResult.isValid) {
      allowSubmit(dispatch, passwordTestResult.message, false);
      return;
    }
    checkPasswordsMatch(passwordConfirmation, value);
  };

  const onPasswordConfirmationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value: string = e.target.value;
    dispatch(actions.setPasswordConfirmation(value));
    checkPasswordsMatch(password, value);
  };

  const onRegisterBtnClick = (
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
          <div>
            <label>password confirmation</label>
            <input
              type="password"
              placeholder="Password Confirmation"
              value={passwordConfirmation}
              onChange={onPasswordConfirmationChange}
            />
          </div>
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
    </ReactModal>
  );
};
