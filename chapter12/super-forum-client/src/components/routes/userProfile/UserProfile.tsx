import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Thread } from "../../../models/Thread";
import { ThreadItem } from "../../../models/ThreadItem";
import { UserState } from "../../../reducers/user-reducer";
import { getUserThreads } from "../../../services/DataService";
import { AppState } from "../../../store";
import { NavigationBar } from "../../areas/navigation-bar/NavigationBar";
import { PasswordForm } from "../../auth/common/PasswordForm";
import { actions, reducer as userReducer } from "../../auth/common/UserReducer";
import * as css from "./UserProfile.css";

export const UserProfile = () => {
  const [
    {
      username,
      password,
      passwordConfirmation,
      resultMessage,
      isSubmitEnabled,
    },
    dispatch,
  ] = useReducer(userReducer, {
    username: "",
    password: "*********",
    passwordConfirmation: "*********",
    resultMessage: "",
    isSubmitEnabled: false,
  });

  const userState: UserState = useSelector((state: AppState) => state.user);

  const [threads, setThreads] = useState<JSX.Element | undefined>();
  const [threadItems, setThreadItems] = useState<JSX.Element | undefined>();

  useEffect(() => {
    console.log("User state:", userState);

    if (userState?.userProfile) {
      dispatch(actions.setUsername(userState.userProfile.userName));

      getUserThreads(userState.userProfile.id.toString()).then((items) => {
        const threadItemsInThreadList: ThreadItem[] = [];
        const threadList: JSX.Element[] = items.map((thread: Thread) => {
          for (let i = 0; i < thread.threadItems.length; i++) {
            threadItemsInThreadList.push(thread.threadItems[i]);
          }

          return (
            <li key={`user-th-${thread.id}`}>
              <Link to={`/thread/${thread.id}`} className={css.link}>
                {thread.title}
              </Link>
            </li>
          );
        });

        setThreads(<ul>{threadList}</ul>);

        const threadItemList: JSX.Element[] = threadItemsInThreadList.map(
          (ti: ThreadItem) => (
            <li key={`user-th-${ti.threadId}`}>
              <Link to={`/thread/${ti.threadId}`} className={css.link}>
                {ti.body}
              </Link>
            </li>
          )
        );

        setThreadItems(<ul>{threadItemList}</ul>);
      });
    }
  }, [userState]);

  return (
    <div className="screen-root-container">
      <div className="thread-nav-container">
        <NavigationBar />
      </div>
      <form className={css.contentContainer}>
        <div>
          <strong>User Profile</strong>
          <label style={{ marginLeft: ".75em" }}>{username}</label>
        </div>
        <div className={css.password}>
          <div>
            <PasswordForm
              dispatch={dispatch}
              password={password}
              passwordConfirmation={passwordConfirmation}
            />
            <button className="action-btn" disabled={!isSubmitEnabled}>
              Change Password
            </button>
          </div>
          <div style={{ marginTop: ".5em" }}>
            <label>{resultMessage}</label>
          </div>
        </div>
        <div className={css.postings}>
          <hr className="thread-section-divider" />
          <div className="userprofile-threads">
            <strong>Threads Posted</strong>
            {threads}
          </div>
          <div className="userprofile-threadIems">
            <strong>ThreadItems Posted</strong>
            {threadItems}
          </div>
        </div>
      </form>
    </div>
  );
};
