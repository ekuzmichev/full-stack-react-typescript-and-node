import {
  faRegistered,
  faSignInAlt,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { UserProfile } from "../../../reducers/user-reducer";
import { AppState, useAppSelector } from "../../../store";
import { Login } from "../../auth/Login";
import { Logout } from "../../auth/Logout";
import { Registration } from "../../auth/Registration";
import "./SidebarMenus.css";
import { Link } from "react-router-dom";

export const SidebarMenus = () => {
  const [registrationFormOpen, setRegistrationFormOpen] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [logoutFormOpen, setLogoutFormOpen] = useState(false);

  const user: UserProfile | null = useAppSelector(
    (state: AppState) => state.user.userProfile
  );

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
          <span className="menu-name">
            <Link to={`/userprofile/${user?.id}`}>{user?.userName}</Link>
          </span>
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
