import React, { FC, useReducer, useState } from "react";
import ReactModal from "react-modal";
import {
  PasswordTestResult,
  isPasswordValid,
} from "../../common/validators/PasswordValidator";
import "./../../App.css";
import "./Registration.css";
import {
  UserRegistrationState,
  userRegistrationReducer,
} from "./common/UserRegistrationReducer";

interface RegistrationProps {
  isOpen: boolean;
  onClickToggle: (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
}

export const Registration: FC<RegistrationProps> = ({
  isOpen,
  onClickToggle,
}) => {
  const [isRegisterBtnEnabled, setRegisterBtnEnabled] =
    useState<boolean>(false);

  const initialUserRegistrationState: UserRegistrationState = {
    username: "bob",
    password: "",
    email: "admin@google.com",
    passwordConfirmation: "",
    resultMessage: "",
  };

  const [
    { username, password, email, passwordConfirmation, resultMessage },
    dispatch,
  ] = useReducer(userRegistrationReducer, initialUserRegistrationState);

  const allowRegistration = (msg: string, enabled: boolean) => {
    setRegisterBtnEnabled(enabled);
    dispatch({ payload: msg, type: "resultMessage" });
  };

  const checkPasswordsMatch = (
    password: string,
    passwordConfirmation: string
  ): boolean => {
    if (password !== passwordConfirmation) {
      allowRegistration("Passwords do not match", false);
      return false;
    } else {
      allowRegistration("", true);
      return true;
    }
  };

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    dispatch({ payload: value, type: "username" });
    if (!value) {
      allowRegistration("Username can not be empty", false);
    } else {
      allowRegistration("", true);
    }
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    dispatch({ payload: value, type: "email" });
    if (!value) {
      allowRegistration("Email can not be empty", false);
    } else {
      allowRegistration("", true);
    }
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    dispatch({ payload: value, type: "password" });
    const passwordTestResult: PasswordTestResult = isPasswordValid(value);
    if (!passwordTestResult.isValid) {
      allowRegistration(passwordTestResult.message, false);
      return;
    }
    checkPasswordsMatch(passwordConfirmation, value);
  };

  const onPasswordConfirmationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value: string = e.target.value;
    dispatch({ payload: value, type: "passwordConfirmation" });
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
              disabled={!isRegisterBtnEnabled}
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
