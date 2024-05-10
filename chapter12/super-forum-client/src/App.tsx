import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/routes/Home";
import { Thread } from "./components/routes/thread/Thread";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categoryThreads/:categoryId" element={<Home />} />
      <Route path="/thread/:id" element={<Thread />} />
    </Routes>
  );
}
