import React, { FC } from "react";
import { Action } from "redux";
import {
  isPasswordValid,
  PasswordValidationResult,
} from "../../../common/validators/PasswordValidator";
import { allowSubmit } from "./Helpers";
import { actions } from "./UserReducer";

interface PasswordFormProps {
  dispatch: React.Dispatch<Action>;
  password: string;
  passwordConfirmation: string;
}

export const PasswordForm: FC<PasswordFormProps> = ({
  dispatch,
  password,
  passwordConfirmation,
}) => {
  const checkPasswordsMatch = (
    password: string,
    passwordConfirmation: string
  ): boolean => {
    if (password !== passwordConfirmation) {
      allowSubmit(dispatch, false, "Passwords do not match");
      return false;
    } else {
      allowSubmit(dispatch, true);
      return true;
    }
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    dispatch(actions.setPassword(value));
    const passwordTestResult: PasswordValidationResult = isPasswordValid(value);
    if (!passwordTestResult.isValid) {
      allowSubmit(dispatch, false, passwordTestResult.message);
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

  return (
    <>
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
    </>
  );
};
