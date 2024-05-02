import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { MIN_DESKTOP_WINDOW_WIDTH } from "../../../constants";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import "./Nav.css";
import ReactModal from "react-modal";
import { SidebarMenus } from "../sidebar/SidebarMenus";

const Nav = () => {
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
          className="nav-mobile-menu"
        />
      );
    }
    return null;
  };

  return (
    <>
      <ReactModal
        className="modal-menu"
        isOpen={menuVisible}
        onRequestClose={onMenuModalRequestClose}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
      >
        <SidebarMenus />
      </ReactModal>
      <div className="nav">
        {getMobileMenu()}
        <strong>SuperForum</strong>
      </div>
    </>
  );
};

export default Nav;
