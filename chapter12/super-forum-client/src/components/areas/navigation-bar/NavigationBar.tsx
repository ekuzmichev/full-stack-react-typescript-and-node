import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { Modal } from "../../common/Modal";
import { SideBarMenus } from "../side-bar/SideBarMenus";
import * as css from "./NavigationBar.css";

export const NavigationBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const { isMobile } = useWindowDimensions();

  const onMenuIconClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    setMenuVisible(!menuVisible);
  };

  const onMenuModalRequestClose = (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    setMenuVisible(false);
  };

  return (
    <div className={css.container}>
      <Modal
        isOpen={menuVisible}
        onRequestClose={onMenuModalRequestClose}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
      >
        <SideBarMenus />
      </Modal>
      <div className={css.content}>
        {isMobile && (
          <FontAwesomeIcon
            icon={faBars}
            onClick={onMenuIconClick}
            size="lg"
            className={css.menuIcon}
          />
        )}
        <strong>Super Forum</strong>
      </div>
    </div>
  );
};
