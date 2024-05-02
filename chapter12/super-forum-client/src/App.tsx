import "./App.css";
import { LeftMenu } from "./components/areas/left-menu/LeftMenu";
import { Main } from "./components/areas/main/Main";
import { Nav } from "./components/areas/nav/Nav";
import { RightMenu } from "./components/areas/right-menu/RightMenu";
import { Sidebar } from "./components/areas/sidebar/Sidebar";

export function App() {
  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  );
}
