import {
  faRegistered,
  faSignInAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { UserProfile, setUserProfile } from "../../reducers/user-reducer";
import { AppState, useAppSelector } from "../../store";
import { Login } from "../auth/Login";
import { Registration } from "../auth/Registration";
import "./SidebarMenus.css";

export const SidebarMenus = () => {
  const [registrationFormOpen, setRegistrationFormOpen] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);

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

  return (
    <>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-name">{user?.userName}</span>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faRegistered}
            onClick={onRegistrationFormToggle}
          />
          <span className="menu-name">register</span>
          <Registration
            isOpen={registrationFormOpen}
            onClickToggle={onRegistrationFormToggle}
          />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignInAlt} onClick={onLoginFormToggle} />
          <span className="menu-name">login</span>
          <Login isOpen={loginFormOpen} onClickToggle={onLoginFormToggle} />
        </li>
      </ul>
    </>
  );
};
