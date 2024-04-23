import { MIN_DESKTOP_WINDOW_WIDTH } from "../constants";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const Sidebar = () => {
  const { width } = useWindowDimensions();

  if (width <= MIN_DESKTOP_WINDOW_WIDTH) {
    return null;
  }

  return <div className="sidebar">Sidebar</div>;
};

export default Sidebar;
