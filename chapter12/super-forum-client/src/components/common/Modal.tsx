import { FC } from "react";
import ReactModal from "react-modal";
import * as css from "./Modal.css"

export const Modal: FC<React.PropsWithChildren<ReactModal.Props>> = (props) => (
  <ReactModal {...props} className={css.modalMenu}>{props.children}</ReactModal>
);
