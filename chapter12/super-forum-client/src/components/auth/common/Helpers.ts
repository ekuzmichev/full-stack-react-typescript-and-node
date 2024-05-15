import { Dispatch } from "react";
import { Action } from "redux";
import { actions } from "./UserReducer";

export const allowSubmit = (
  dispatch: Dispatch<Action>,
  enabled: boolean,
  msg?: string
) => {
  dispatch(actions.setSubmitEnabled(enabled));
  msg?.trim() && dispatch(actions.setResultMessage(msg));
};
