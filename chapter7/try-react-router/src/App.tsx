import { Route, Routes } from "react-router-dom";
import "./App.css";
import ScreenA from "./ScreenA";
import ScreenB from "./ScreenB";
import ScreenC from "./ScreenC";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ScreenA />} />
      <Route path="/b" element={<ScreenB />} />
      <Route path="/c" element={<ScreenC message="Hello! I'm on ScreenC" />} />
    </Routes>
  );
}

export default App;
