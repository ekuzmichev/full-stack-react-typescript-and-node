import React, { FC, useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { Action, Dispatch } from "redux";
import "../../App.css";
import { UserProfile, setUserProfile } from "../../reducers/user-reducer";
import { FormButtons } from "../common/FormButtons";
import { Modal } from "../common/Modal";
import { ModalProps } from "../types/ModalProps";
import { allowSubmit } from "./common/Helpers";
import { actions, getInitialState, reducer } from "./common/UserReducer";

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
        <FormButtons
          actionBtnText="Login"
          cancelBtnText="Close"
          message={resultMessage}
          actionBtnDisabled={!isSubmitEnabled}
          onActionBtnClick={onLoginBtnClick}
          onCancelBtnClick={onCancelBtnClick}
        />
      </form>
    </Modal>
  );
};
