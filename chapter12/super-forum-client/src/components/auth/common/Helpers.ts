import { Dispatch } from "react";
import { Action } from "redux";
import { actions } from "./UserReducer";

export const allowSubmit = (
  dispatch: Dispatch<Action>,
  msg: string,
  enabled: boolean
) => {
  dispatch(actions.setSubmitEnabled(enabled));
  dispatch(actions.setResultMessage(msg));
};
