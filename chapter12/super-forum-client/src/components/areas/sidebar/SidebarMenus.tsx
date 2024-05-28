import {
  faRegistered,
  faSignInAlt,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserProfile } from "../../../reducers/user-reducer";
import { AppState, useAppSelector } from "../../../store";
import { Login } from "../../auth/Login";
import { Logout } from "../../auth/Logout";
import { Registration } from "../../auth/Registration";
import * as css from "./SidebarMenus.css";

export const SidebarMenus = () => {
  const [registrationFormOpen, setRegistrationFormOpen] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [logoutFormOpen, setLogoutFormOpen] = useState(false);

  const user: UserProfile | null = useAppSelector(
    (state: AppState) => state.user.userProfile
  );

  const onRegistrationFormVisibilityToggle = () => {
    setRegistrationFormOpen(!registrationFormOpen);
  };

  const onLoginFormVisibilityToggle = () => {
    setLoginFormOpen(!loginFormOpen);
  };

  const onLogoutFormVisibilityToggle = () => {
    setLogoutFormOpen(!logoutFormOpen);
  };

  return (
    <>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className={css.menuItemText}>
            <Link to={`/userProfile/${user?.id}`}>{user?.userName}</Link>
          </span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} />
          <span
            onClick={onRegistrationFormVisibilityToggle}
            className={css.menuItemText}
          >
            register
          </span>
          <Registration
            isOpen={registrationFormOpen}
            onVisibilityToggle={onRegistrationFormVisibilityToggle}
          />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignInAlt} />
          <span onClick={onLoginFormVisibilityToggle} className={css.menuItemText}>
            login
          </span>
          <Login
            isOpen={loginFormOpen}
            onVisibilityToggle={onLoginFormVisibilityToggle}
          />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span onClick={onLogoutFormVisibilityToggle} className={css.menuItemText}>
            logout
          </span>
          <Logout
            isOpen={logoutFormOpen}
            onVisibilityToggle={onLogoutFormVisibilityToggle}
          />
        </li>
      </ul>
    </>
  );
};
