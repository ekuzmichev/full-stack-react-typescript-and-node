import { useSelector } from "react-redux";
import { AppState } from "./store/AppState";

const UserDisplay = () => {
  const user = useSelector((state: AppState) => state.user);

  if (user) {
    console.log("user", user);
    return (
      <>
        <div>
          <label>Username:</label>
          &nbsp;{user.username}
        </div>
        <div>
          <label>E-Mail:</label>
          &nbsp;{user.email}
        </div>
        <div>
          <label>City:</label>
          &nbsp;{user.city}
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default UserDisplay;
