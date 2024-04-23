import { MIN_DESKTOP_WINDOW_WIDTH } from "../constants";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const LeftMenu = () => {
  const { width } = useWindowDimensions();

  if (width <= MIN_DESKTOP_WINDOW_WIDTH) {
    return null;
  }

  return <div className="left-menu">Left Menu</div>;
};

export default LeftMenu;
