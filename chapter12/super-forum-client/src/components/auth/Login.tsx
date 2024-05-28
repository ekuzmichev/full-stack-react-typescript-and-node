import React, { FC, useEffect, useReducer } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { Action, Dispatch } from "redux";
import { UserProfile, setUserProfile } from "../../reducers/user-reducer";
import { ModalProps } from "../types/ModalProps";
import "../../App.css";
import { allowSubmit } from "./common/Helpers";
import { actions, getInitialState, reducer } from "./common/UserReducer";
import { Modal } from "../common/Modal";

export const Login: FC<ModalProps> = ({ isOpen, onVisibilityToggle }) => {
  const reduxDispatch: Dispatch<Action> = useDispatch();

  const [{ username, password, resultMessage, isSubmitEnabled }, userDispatch] =
    useReducer(reducer, getInitialState());

  useEffect(() => {
    const userProfile: UserProfile = {
      id: 1,
      userName: "testUser",
    };

    reduxDispatch(setUserProfile(userProfile));
  }, [reduxDispatch]);

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    userDispatch(actions.setUsername(value));
    if (!value) {
      allowSubmit(userDispatch, false, "Username can not be empty");
    } else {
      allowSubmit(userDispatch, true);
    }
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    userDispatch(actions.setPassword(value));
    if (!value) {
      allowSubmit(userDispatch, false, "Password cannot be empty");
    } else {
      allowSubmit(userDispatch, true);
    }
  };

  const onLoginBtnClick = (
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
    </Modal>
  );
};
