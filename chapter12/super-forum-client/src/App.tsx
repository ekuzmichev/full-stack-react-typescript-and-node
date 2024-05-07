import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/routes/Home";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categoryThreads/:categoryId" element={<Home />} />
    </Routes>
  );
}
