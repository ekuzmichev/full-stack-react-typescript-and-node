import { FC } from "react";
import { LeftMenu } from "../areas/left-menu/LeftMenu";
import { Main } from "../areas/main/Main";
import { Nav } from "../areas/nav/Nav";
import { RightMenu } from "../areas/right-menu/RightMenu";
import { Sidebar } from "../areas/sidebar/Sidebar";
import "./Home.css";

export const Home: FC = () => {
  return (
    <div className="screen-root-container home-container">
      <div className="navigation">
        <Nav />
      </div>
      <Sidebar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  );
};