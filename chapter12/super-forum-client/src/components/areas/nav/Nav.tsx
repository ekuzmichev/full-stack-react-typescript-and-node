import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ReactModal from "react-modal";
import { MIN_DESKTOP_WINDOW_WIDTH } from "../../../constants";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { SidebarMenus } from "../sidebar/SidebarMenus";
import * as css from "./Nav.css";
import { Modal } from "../../common/Modal";

export const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const { width } = useWindowDimensions();

  const onMenuIconClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    setMenuVisible(!menuVisible);
  };

  const onMenuModalRequestClose = (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    setMenuVisible(false);
  };

  const getMobileMenu = () => {
    if (width <= MIN_DESKTOP_WINDOW_WIDTH) {
      return (
        <FontAwesomeIcon
          icon={faBars}
          onClick={onMenuIconClick}
          size="lg"
          className={css.navMobileMenu}
        />
      );
    }
    return null;
  };

  return (
    <div className={css.navigation}>
      <Modal
        isOpen={menuVisible}
        onRequestClose={onMenuModalRequestClose}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
      >
        <SidebarMenus />
      </Modal>
      <div className={css.nav}>
        {getMobileMenu()}
        <strong>SuperForum</strong>
      </div>
    </div>
  );
};
