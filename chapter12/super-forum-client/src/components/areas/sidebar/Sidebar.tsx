import { MIN_DESKTOP_WINDOW_WIDTH } from "../../../constants";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { SidebarMenus } from "./SidebarMenus";

const Sidebar = () => {
  const { width } = useWindowDimensions();

  if (width <= MIN_DESKTOP_WINDOW_WIDTH) {
    return null;
  }

  return (
    <div className="sidebar">
      <SidebarMenus />
    </div>
  );
};

export default Sidebar;
