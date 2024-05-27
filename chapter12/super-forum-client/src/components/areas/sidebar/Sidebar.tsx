import { MIN_DESKTOP_WINDOW_WIDTH } from "../../../constants";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { SidebarMenus } from "./SidebarMenus";
import * as css from "./Sidebar.css";

export const Sidebar = () => {
  const { width } = useWindowDimensions();

  if (width <= MIN_DESKTOP_WINDOW_WIDTH) {
    return null;
  }

  return (
    <div className={css.sidebar}>
      <SidebarMenus />
    </div>
  );
};
