import React from "react";
import "../styles/Header.css";
import LoginButton from "./buttons/LoginButton";
import LogoutButton from "./buttons/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="header">
      <a href="#default" className="logo">
        Room Booking Service
      </a>

      <div className="header-right">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default Header;
