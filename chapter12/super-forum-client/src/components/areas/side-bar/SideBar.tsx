import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import * as css from "./SideBar.css";
import { SideBarMenus } from "./SideBarMenus";

export const SideBar = () => {
  const { isMobile } = useWindowDimensions();

  if (isMobile) {
    return null;
  }

  return (
    <div className={css.container}>
      <SideBarMenus />
    </div>
  );
};
