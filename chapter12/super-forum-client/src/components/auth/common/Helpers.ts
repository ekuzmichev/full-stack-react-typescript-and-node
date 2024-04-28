import { Dispatch } from "react";
import { actions } from "./UserReducer";

export const allowSubmit = (
  dispatch: Dispatch<any>,
  msg: string,
  enabled: boolean
) => {
  dispatch(actions.setSubmitEnabled(enabled));
  dispatch(actions.setResultMessage(msg));
};
