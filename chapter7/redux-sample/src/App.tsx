import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { USER_TYPE } from "./store/UserReducer";
import UserDisplay from "./UserDisplay";

function App() {
  const [userId, setUserId] = useState(0);

  const dispatch = useDispatch();

  const onUserIdChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const userIdFromInput = e.target.value ? Number(e.target.value) : 0;
    
    console.log("userId", userIdFromInput);
    
    setUserId(userIdFromInput);

    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (usersResponse.ok) {
      const users = await usersResponse.json();

      console.log("users", users);

      const user = users.find((userItem: any) => {
        return userItem && userItem.id === userIdFromInput;
      });

      console.log("user", user);

      if (user) {
        dispatch({
          type: USER_TYPE,
          payload: {
            id: user.id,
            username: user.username,
            email: user.email,
            city: user.address.city,
          },
        });
      }
    }
  };

  return (
    <div className="App">
      <label>User Id: </label>
      <input value={userId} onChange={onUserIdChange} />
      <UserDisplay />
    </div>
  );
}

export default App;
