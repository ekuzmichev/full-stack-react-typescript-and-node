import { FC } from "react";
import { LeftMenu } from "../areas/left-menu/LeftMenu";
import { Main } from "../areas/main/Main";
import { NavigationBar } from "../areas/navigation-bar/NavigationBar";
import { RightMenu } from "../areas/right-menu/RightMenu";
import { SideBar } from "../areas/side-bar/SideBar";
import * as css from "./Home.css";

export const Home: FC = () => {
  return (
    <div className={css.container}>
      <NavigationBar />
      <SideBar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  );
};
