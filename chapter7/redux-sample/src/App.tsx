import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import PostDisplay from "./PostDisplay";
import UserDisplay from "./UserDisplay";
import { USER_TYPE } from "./store/UserReducer";
import { POST_TYPE } from "./store/PostReducer";

function App() {
  const [userId, setUserId] = useState(0);
  const [postId, setPostId] = useState(0);

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

  const onPostIdChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const postIdFromInput = e.target.value ? Number(e.target.value) : 0;

    console.log("postId", postIdFromInput);

    setPostId(postIdFromInput);

    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + postIdFromInput
    );

    if (postResponse.ok) {
      const post = await postResponse.json();

      console.log("post", post);

      if (post) {
        dispatch({
          type: POST_TYPE,
          payload: {
            id: post.id,
            title: post.title,
            body: post.body,
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
      <label>Post Id: </label>
      <input value={postId} onChange={onPostIdChange} />
      <PostDisplay />
    </div>
  );
}

export default App;
