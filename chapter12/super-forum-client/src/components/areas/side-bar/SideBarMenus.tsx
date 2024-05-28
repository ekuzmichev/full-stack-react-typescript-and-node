import {
  faRegistered,
  faSignInAlt,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "../../../reducers/user-reducer";
import { AppState, useAppSelector } from "../../../store";
import { Login } from "../../auth/Login";
import { Logout } from "../../auth/Logout";
import { Registration } from "../../auth/Registration";
import * as css from "./SideBarMenus.css";

export const SideBarMenus = () => {
  const navigate = useNavigate();

  const [registrationFormOpen, setRegistrationFormOpen] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [logoutFormOpen, setLogoutFormOpen] = useState(false);

  const user: UserProfile | null = useAppSelector(
    (state: AppState) => state.user.userProfile
  );

  const onUserNameListItemClick = () => {
    navigate(`/userProfile/${user?.id}`);
  };
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
        <li className={css.clickableListItem} onClick={onUserNameListItemClick}>
          <FontAwesomeIcon icon={faUser} />
          <span className={css.menuItemText}>{user?.userName}</span>
        </li>
        <li
          className={css.clickableListItem}
          onClick={onRegistrationFormVisibilityToggle}
        >
          <FontAwesomeIcon icon={faRegistered} />
          <span className={css.menuItemText}>register</span>
          <Registration
            isOpen={registrationFormOpen}
            onVisibilityToggle={onRegistrationFormVisibilityToggle}
          />
        </li>
        <li
          className={css.clickableListItem}
          onClick={onLoginFormVisibilityToggle}
        >
          <FontAwesomeIcon icon={faSignInAlt} />
          <span className={css.menuItemText}>login</span>
          <Login
            isOpen={loginFormOpen}
            onVisibilityToggle={onLoginFormVisibilityToggle}
          />
        </li>
        <li
          className={css.clickableListItem}
          onClick={onLogoutFormVisibilityToggle}
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span className={css.menuItemText}>logout</span>
          <Logout
            isOpen={logoutFormOpen}
            onVisibilityToggle={onLogoutFormVisibilityToggle}
          />
        </li>
      </ul>
    </>
  );
};
