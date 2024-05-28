import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import * as css from "./Sidebar.css";
import { SidebarMenus } from "./SidebarMenus";

export const Sidebar = () => {
  const { isMobile } = useWindowDimensions();

  if (isMobile) {
    return null;
  }

  return (
    <div className={css.sidebar}>
      <SidebarMenus />
    </div>
  );
};
