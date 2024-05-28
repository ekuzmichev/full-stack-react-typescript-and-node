import { FC } from "react";
import ReactModal from "react-modal";
import * as css from "./Modal.css"

export const Modal: FC<ReactModal.Props> = (props) => (
  <ReactModal {...props} className={css.container}>{props.children}</ReactModal>
);
