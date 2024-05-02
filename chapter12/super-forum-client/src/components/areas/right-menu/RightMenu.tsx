import { MIN_DESKTOP_WINDOW_WIDTH } from "../../../constants";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

const RightMenu = () => {
  const { width } = useWindowDimensions();

  if (width <= MIN_DESKTOP_WINDOW_WIDTH) {
    return null;
  }

  return <div className="right-menu">Right Menu</div>;
};

export default RightMenu;
