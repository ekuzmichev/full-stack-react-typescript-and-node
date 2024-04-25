import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MIN_DESKTOP_WINDOW_WIDTH } from "../../constants";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

const Nav = () => {
  const { width } = useWindowDimensions();

  const getMobileMenu = () => {
    if (width <= MIN_DESKTOP_WINDOW_WIDTH) {
      return (
        <FontAwesomeIcon icon={faBars} size="lg" className="nav-mobile-menu" />
      );
    }
    return null;
  };

  return (
    <div className="nav">
      {getMobileMenu()}
      <strong>SuperForum</strong>
    </div>
  );
};

export default Nav;
