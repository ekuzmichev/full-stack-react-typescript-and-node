import {
  faRegistered,
  faSignInAlt,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UserProfile, setUserProfile } from "../../../reducers/user-reducer";
import { AppState, useAppSelector } from "../../../store";
import { Login } from "../../auth/Login";
import { Logout } from "../../auth/Logout";
import { Registration } from "../../auth/Registration";
import "./SidebarMenus.css";

export const SidebarMenus = () => {
  const [registrationFormOpen, setRegistrationFormOpen] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [logoutFormOpen, setLogoutFormOpen] = useState(false);

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

  const onRegistrationFormToggle = () => {
    setRegistrationFormOpen(!registrationFormOpen);
  };

  const onLoginFormToggle = () => {
    setLoginFormOpen(!loginFormOpen);
  };

  const onLogoutFormToggle = () => {
    setLogoutFormOpen(!logoutFormOpen);
  };

  return (
    <>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-name">{user?.userName}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} />
          <span onClick={onRegistrationFormToggle} className="menu-name">
            register
          </span>
          <Registration
            isOpen={registrationFormOpen}
            onClickToggle={onRegistrationFormToggle}
          />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignInAlt} />
          <span onClick={onLoginFormToggle} className="menu-name">
            login
          </span>
          <Login isOpen={loginFormOpen} onClickToggle={onLoginFormToggle} />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span onClick={onLogoutFormToggle} className="menu-name">
            logout
          </span>
          <Logout isOpen={logoutFormOpen} onClickToggle={onLogoutFormToggle} />
        </li>
      </ul>
    </>
  );
};
