import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/routes/Home";
import { Thread } from "./components/routes/thread/Thread";
import { UserProfile } from "./components/routes/userProfile/UserProfile";
import { setUserProfile } from "./reducers/user-reducer";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: replace with GraphQL call
    dispatch(
      setUserProfile({
        id: 1,
        userName: "testUser",
      })
    );
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categoryThreads/:categoryId" element={<Home />} />
      <Route path="/thread/:id" element={<Thread />} />
      <Route path="/userProfile/:id" element={<UserProfile />} />
    </Routes>
  );
}
