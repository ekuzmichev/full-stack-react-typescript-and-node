import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserProfile, setUserProfile } from "../../reducers/user-reducer";
import { AppState, useAppSelector } from "../../store";

export const SidebarMenus = () => {
  const user: UserProfile | null = useAppSelector(
    (state: AppState) => state.user.userProfile
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const userProfile: UserProfile = {
      id: 1,
      userName: "testUser",
    };

    dispatch(setUserProfile(userProfile));
  }, [dispatch]);

  return (
    <>
      <ul>
        <FontAwesomeIcon icon={faUser} />
        <span className="menu-name">{user?.userName}</span>
      </ul>
    </>
  );
};
