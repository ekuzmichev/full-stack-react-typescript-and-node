import { FC, MouseEventHandler } from "react";
import * as css from "./FormButtons.css";

interface FormButtonsProps {
  actionBtnText: string;
  cancelBtnText: string;
  message?: string;
  actionBtnDisabled?: boolean;
  cancelBtnDisabled?: boolean;
  onActionBtnClick?: MouseEventHandler<HTMLButtonElement>;
  onCancelBtnClick?: MouseEventHandler<HTMLButtonElement>;
}

export const FormButtons: FC<FormButtonsProps> = (props) => (
  <div className={css.formButtons}>
    <div className={css.formBtnLeft}>
      <button
        className={css.actionBtn}
        disabled={props.actionBtnDisabled ?? false}
        onClick={props.onActionBtnClick}
      >
        {props.actionBtnText}
      </button>
      <button
        className={css.cancelBtn}
        disabled={props.cancelBtnDisabled ?? false}
        onClick={props.onCancelBtnClick}
      >
        {props.cancelBtnText}
      </button>
    </div>
    {props.message && (
      <span className={css.formBtnRight}>
        <strong>{props.message}</strong>
      </span>
    )}
  </div>
);
