import React, { FC } from "react";
import { FormButtons } from "../common/FormButtons";
import { Modal } from "../common/Modal";
import { ModalProps } from "../types/ModalProps";
import * as css from "./Logout.css";

export const Logout: FC<ModalProps> = ({ isOpen, onVisibilityToggle }) => {
  const onLogoutBtnClick = (
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
    >
      <form>
        <div className={css.logoutInputs}>Are you sure you want to logout?</div>
        <FormButtons
          actionBtnText="Logout"
          cancelBtnText="Close"
          onActionBtnClick={onLogoutBtnClick}
          onCancelBtnClick={onCancelBtnClick}
        />
      </form>
    </Modal>
  );
};
